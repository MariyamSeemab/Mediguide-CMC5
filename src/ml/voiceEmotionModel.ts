import * as tf from '@tensorflow/tfjs';
import { AudioFeatures } from '../utils/voiceEmotionAnalyzer';

// Emotion labels for classification
export const EMOTION_LABELS = [
  'Calm',
  'Anxious',
  'Distressed',
  'In Pain',
  'Weak/Tired',
  'Critical'
] as const;

export type EmotionLabel = typeof EMOTION_LABELS[number];

// Urgency mapping
const EMOTION_TO_URGENCY: Record<EmotionLabel, 'low' | 'medium' | 'high' | 'critical'> = {
  'Calm': 'low',
  'Anxious': 'medium',
  'Distressed': 'high',
  'In Pain': 'medium',
  'Weak/Tired': 'medium',
  'Critical': 'critical'
};

// Tone mapping
const EMOTION_TO_TONE: Record<EmotionLabel, string> = {
  'Calm': 'Normal',
  'Anxious': 'Worried',
  'Distressed': 'Urgent',
  'In Pain': 'Strained',
  'Weak/Tired': 'Low energy',
  'Critical': 'Emergency'
};

/**
 * Neural Network Model for Voice Emotion Recognition
 * Architecture: Multi-layer perceptron with dropout for regularization
 */
export class VoiceEmotionModel {
  private model: tf.LayersModel | null = null;
  private isModelLoaded = false;

  /**
   * Create and compile the neural network model
   */
  createModel(): tf.LayersModel {
    const model = tf.sequential();

    // Input layer: 10 audio features
    model.add(tf.layers.dense({
      inputShape: [10],
      units: 64,
      activation: 'relu',
      kernelInitializer: 'heNormal',
      name: 'dense_input'
    }));

    // Dropout for regularization
    model.add(tf.layers.dropout({ rate: 0.3 }));

    // Hidden layer 1
    model.add(tf.layers.dense({
      units: 128,
      activation: 'relu',
      kernelInitializer: 'heNormal',
      name: 'dense_hidden1'
    }));

    model.add(tf.layers.dropout({ rate: 0.3 }));

    // Hidden layer 2
    model.add(tf.layers.dense({
      units: 64,
      activation: 'relu',
      kernelInitializer: 'heNormal',
      name: 'dense_hidden2'
    }));

    model.add(tf.layers.dropout({ rate: 0.2 }));

    // Output layer: 6 emotion classes
    model.add(tf.layers.dense({
      units: EMOTION_LABELS.length,
      activation: 'softmax',
      name: 'dense_output'
    }));

    // Compile model
    model.compile({
      optimizer: tf.train.adam(0.001),
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy']
    });

    console.log('🧠 Neural Network Model Created');
    model.summary();

    return model;
  }

  /**
   * Extract features from Meyda audio analysis
   */
  extractFeatures(audioFeatures: AudioFeatures[]): number[] {
    if (audioFeatures.length === 0) {
      return new Array(10).fill(0);
    }

    // Aggregate features across all frames
    const rmsValues = audioFeatures.map(f => f.rms || 0).filter(v => v > 0);
    const zcrValues = audioFeatures.map(f => f.zcr || 0).filter(v => v > 0);
    const energyValues = audioFeatures.map(f => f.energy || 0).filter(v => v > 0);
    const centroidValues = audioFeatures.map(f => f.spectralCentroid || 0).filter(v => v > 0);
    const rolloffValues = audioFeatures.map(f => f.spectralRolloff || 0).filter(v => v > 0);
    const fluxValues = audioFeatures.map(f => f.spectralFlux || 0).filter(v => v > 0);
    const loudnessValues = audioFeatures.map(f => f.loudness?.total || 0).filter(v => v > 0);
    const spreadValues = audioFeatures.map(f => f.spectralSpread || 0).filter(v => v > 0);

    const avg = (arr: number[]) => arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
    const max = (arr: number[]) => arr.length > 0 ? Math.max(...arr) : 0;
    const std = (arr: number[]) => {
      if (arr.length === 0) return 0;
      const mean = avg(arr);
      const variance = arr.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / arr.length;
      return Math.sqrt(variance);
    };

    // Feature vector (10 features)
    return [
      avg(rmsValues),           // 0: Average RMS (volume)
      max(rmsValues),           // 1: Max RMS (peak volume)
      std(rmsValues),           // 2: RMS std dev (stability)
      avg(zcrValues),           // 3: Average ZCR (pitch)
      avg(energyValues),        // 4: Average energy
      avg(centroidValues) / 10000,  // 5: Average spectral centroid (normalized)
      avg(rolloffValues) / 10000,   // 6: Average spectral rolloff (normalized)
      avg(fluxValues),          // 7: Average spectral flux
      avg(loudnessValues) / 100,    // 8: Average loudness (normalized)
      avg(spreadValues) / 1000      // 9: Average spectral spread (normalized)
    ];
  }

  /**
   * Initialize model with pre-trained weights or create new
   */
  async initialize() {
    try {
      // Try to load pre-trained model
      this.model = await tf.loadLayersModel('indexeddb://voice-emotion-model');
      console.log('✅ Loaded pre-trained model from IndexedDB');
      this.isModelLoaded = true;
    } catch (error) {
      console.log('⚠️ No pre-trained model found, creating new model');
      this.model = this.createModel();
      
      // Train with synthetic data for initial weights
      await this.trainWithSyntheticData();
      
      // Save model
      await this.model.save('indexeddb://voice-emotion-model');
      console.log('✅ Model saved to IndexedDB');
      this.isModelLoaded = true;
    }
  }

  /**
   * Train model with synthetic emotion data
   * This creates initial weights based on REALISTIC voice patterns
   */
  private async trainWithSyntheticData() {
    console.log('🎓 Training model with realistic voice emotion data...');

    const trainingData: { features: number[], label: number }[] = [];

    // Generate MORE training samples with REALISTIC variations
    const samplesPerEmotion = 100; // Increased from 50

    for (let emotionIdx = 0; emotionIdx < EMOTION_LABELS.length; emotionIdx++) {
      for (let i = 0; i < samplesPerEmotion; i++) {
        let features: number[];

        switch (emotionIdx) {
          case 0: // Calm - Normal speaking voice
            features = [
              0.02 + Math.random() * 0.03,  // RMS: 0.02-0.05 (quiet to normal)
              0.03 + Math.random() * 0.04,  // Max RMS: 0.03-0.07
              0.005 + Math.random() * 0.015, // Std dev: 0.005-0.02 (stable)
              0.07 + Math.random() * 0.03,  // ZCR: 0.07-0.10 (normal pitch)
              0.015 + Math.random() * 0.02, // Energy: 0.015-0.035
              0.18 + Math.random() * 0.08,  // Centroid: 1800-2600 Hz (normal)
              0.55 + Math.random() * 0.15,  // Rolloff: 5500-7000 Hz
              0.05 + Math.random() * 0.04,  // Flux: 0.05-0.09 (stable)
              -0.35 + Math.random() * 0.15, // Loudness: -35 to -20 dB
              0.08 + Math.random() * 0.06   // Spread: 800-1400 (stable)
            ];
            break;

          case 1: // Anxious - Fast, high-pitched, unstable
            features = [
              0.04 + Math.random() * 0.04,  // RMS: 0.04-0.08 (medium)
              0.06 + Math.random() * 0.06,  // Max RMS: 0.06-0.12
              0.04 + Math.random() * 0.04,  // Std dev: 0.04-0.08 (unstable)
              0.11 + Math.random() * 0.05,  // ZCR: 0.11-0.16 (HIGH pitch)
              0.03 + Math.random() * 0.03,  // Energy: 0.03-0.06
              0.26 + Math.random() * 0.10,  // Centroid: 2600-3600 Hz (bright)
              0.70 + Math.random() * 0.20,  // Rolloff: 7000-9000 Hz
              0.12 + Math.random() * 0.10,  // Flux: 0.12-0.22 (UNSTABLE)
              -0.25 + Math.random() * 0.15, // Loudness: -25 to -10 dB
              0.14 + Math.random() * 0.10   // Spread: 1400-2400 (varied)
            ];
            break;

          case 2: // Distressed - Very loud, very high pitch, very unstable
            features = [
              0.09 + Math.random() * 0.07,  // RMS: 0.09-0.16 (LOUD)
              0.13 + Math.random() * 0.10,  // Max RMS: 0.13-0.23 (VERY LOUD)
              0.08 + Math.random() * 0.06,  // Std dev: 0.08-0.14 (VERY unstable)
              0.14 + Math.random() * 0.06,  // ZCR: 0.14-0.20 (VERY HIGH pitch)
              0.07 + Math.random() * 0.05,  // Energy: 0.07-0.12 (high)
              0.30 + Math.random() * 0.12,  // Centroid: 3000-4200 Hz (VERY bright)
              0.80 + Math.random() * 0.25,  // Rolloff: 8000-10500 Hz (strain)
              0.20 + Math.random() * 0.15,  // Flux: 0.20-0.35 (VERY UNSTABLE)
              -0.15 + Math.random() * 0.15, // Loudness: -15 to 0 dB (LOUD)
              0.18 + Math.random() * 0.14   // Spread: 1800-3200 (VERY varied)
            ];
            break;

          case 3: // In Pain - Medium-high volume, strained, tense
            features = [
              0.06 + Math.random() * 0.05,  // RMS: 0.06-0.11 (medium-high)
              0.09 + Math.random() * 0.07,  // Max RMS: 0.09-0.16
              0.05 + Math.random() * 0.04,  // Std dev: 0.05-0.09 (unstable)
              0.10 + Math.random() * 0.04,  // ZCR: 0.10-0.14 (medium-high pitch)
              0.05 + Math.random() * 0.03,  // Energy: 0.05-0.08
              0.24 + Math.random() * 0.08,  // Centroid: 2400-3200 Hz
              0.78 + Math.random() * 0.18,  // Rolloff: 7800-9600 Hz (STRAIN)
              0.11 + Math.random() * 0.08,  // Flux: 0.11-0.19 (unstable)
              -0.20 + Math.random() * 0.12, // Loudness: -20 to -8 dB
              0.13 + Math.random() * 0.08   // Spread: 1300-2100
            ];
            break;

          case 4: // Weak/Tired - Very quiet, low energy, monotone
            features = [
              0.01 + Math.random() * 0.015, // RMS: 0.01-0.025 (VERY quiet)
              0.015 + Math.random() * 0.02, // Max RMS: 0.015-0.035
              0.003 + Math.random() * 0.007,// Std dev: 0.003-0.01 (very stable)
              0.05 + Math.random() * 0.03,  // ZCR: 0.05-0.08 (LOW pitch)
              0.008 + Math.random() * 0.012,// Energy: 0.008-0.02 (VERY low)
              0.14 + Math.random() * 0.06,  // Centroid: 1400-2000 Hz (dull)
              0.45 + Math.random() * 0.15,  // Rolloff: 4500-6000 Hz (low)
              0.04 + Math.random() * 0.03,  // Flux: 0.04-0.07 (stable)
              -0.50 + Math.random() * 0.15, // Loudness: -50 to -35 dB (QUIET)
              0.06 + Math.random() * 0.05   // Spread: 600-1100 (monotone)
            ];
            break;

          case 5: // Critical - EXTREME values, emergency
            features = [
              0.11 + Math.random() * 0.09,  // RMS: 0.11-0.20 (VERY LOUD)
              0.16 + Math.random() * 0.12,  // Max RMS: 0.16-0.28 (EXTREME)
              0.10 + Math.random() * 0.08,  // Std dev: 0.10-0.18 (EXTREME unstable)
              0.15 + Math.random() * 0.07,  // ZCR: 0.15-0.22 (EXTREME pitch)
              0.09 + Math.random() * 0.06,  // Energy: 0.09-0.15 (VERY high)
              0.33 + Math.random() * 0.14,  // Centroid: 3300-4700 Hz (EXTREME)
              0.85 + Math.random() * 0.30,  // Rolloff: 8500-11500 Hz (EXTREME)
              0.24 + Math.random() * 0.18,  // Flux: 0.24-0.42 (EXTREME unstable)
              -0.10 + Math.random() * 0.15, // Loudness: -10 to +5 dB (VERY LOUD)
              0.20 + Math.random() * 0.16   // Spread: 2000-3600 (EXTREME varied)
            ];
            break;

          default:
            features = new Array(10).fill(0);
        }

        trainingData.push({ features, label: emotionIdx });
      }
    }

    // Shuffle training data
    for (let i = trainingData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [trainingData[i], trainingData[j]] = [trainingData[j], trainingData[i]];
    }

    // Prepare tensors
    const xs = tf.tensor2d(trainingData.map(d => d.features));
    const ys = tf.oneHot(tf.tensor1d(trainingData.map(d => d.label), 'int32'), EMOTION_LABELS.length);

    // Train model with MORE epochs for better learning
    await this.model!.fit(xs, ys, {
      epochs: 100, // Increased from 50
      batchSize: 32,
      validationSplit: 0.2,
      shuffle: true,
      callbacks: {
        onEpochEnd: (epoch, logs) => {
          if (epoch % 20 === 0 || epoch === 99) {
            console.log(`Epoch ${epoch + 1}: loss = ${logs?.loss.toFixed(4)}, accuracy = ${logs?.acc.toFixed(4)}`);
          }
        }
      }
    });

    // Cleanup
    xs.dispose();
    ys.dispose();

    console.log('✅ Model training complete - Ready for real voice detection');
  }

  /**
   * Predict emotion from audio features using trained model
   */
  async predict(audioFeatures: AudioFeatures[]): Promise<{
    emotion: EmotionLabel;
    confidence: number;
    probabilities: Record<EmotionLabel, number>;
  }> {
    if (!this.model) {
      await this.initialize();
    }

    // Extract feature vector
    const features = this.extractFeatures(audioFeatures);
    
    console.log('🎯 YOUR VOICE FEATURES:');
    console.log(`   RMS (volume): ${features[0].toFixed(4)} ${features[0] < 0.03 ? '(quiet)' : features[0] > 0.08 ? '(LOUD)' : '(normal)'}`);
    console.log(`   Max RMS: ${features[1].toFixed(4)}`);
    console.log(`   Stability: ${features[2].toFixed(4)} ${features[2] < 0.03 ? '(stable)' : '(UNSTABLE)'}`);
    console.log(`   ZCR (pitch): ${features[3].toFixed(4)} ${features[3] < 0.10 ? '(low)' : features[3] > 0.13 ? '(HIGH)' : '(normal)'}`);
    console.log(`   Energy: ${features[4].toFixed(4)}`);
    console.log(`   Centroid: ${(features[5] * 10000).toFixed(0)} Hz ${features[5] > 0.28 ? '(bright/stressed)' : '(normal)'}`);
    console.log(`   Rolloff: ${(features[6] * 10000).toFixed(0)} Hz ${features[6] > 0.80 ? '(strained)' : '(normal)'}`);
    console.log(`   Flux: ${features[7].toFixed(4)} ${features[7] > 0.15 ? '(unstable)' : '(stable)'}`);
    console.log(`   Loudness: ${(features[8] * 100).toFixed(1)} dB`);
    console.log(`   Spread: ${(features[9] * 1000).toFixed(0)} ${features[9] > 0.15 ? '(varied)' : '(monotone)'}`);

    // Make prediction
    const inputTensor = tf.tensor2d([features]);
    const prediction = this.model!.predict(inputTensor) as tf.Tensor;
    const probabilities = await prediction.data();

    // Get predicted class
    const predictedIdx = probabilities.indexOf(Math.max(...probabilities));
    const emotion = EMOTION_LABELS[predictedIdx];
    const confidence = probabilities[predictedIdx];

    // Create probabilities object
    const probabilitiesObj: Record<string, number> = {};
    EMOTION_LABELS.forEach((label, idx) => {
      probabilitiesObj[label] = probabilities[idx];
    });

    console.log('🎯 ML PREDICTIONS:');
    EMOTION_LABELS.forEach((label, idx) => {
      const prob = probabilities[idx];
      const bar = '█'.repeat(Math.round(prob * 20));
      console.log(`   ${label.padEnd(12)} ${(prob * 100).toFixed(1)}% ${bar}`);
    });
    console.log(`\n✅ FINAL: ${emotion} (${(confidence * 100).toFixed(1)}% confidence)\n`);

    // Cleanup
    inputTensor.dispose();
    prediction.dispose();

    return {
      emotion,
      confidence,
      probabilities: probabilitiesObj as Record<EmotionLabel, number>
    };
  }

  /**
   * Get full emotion analysis with urgency and tone
   */
  async analyzeEmotion(audioFeatures: AudioFeatures[], transcript: string) {
    const prediction = await this.predict(audioFeatures);
    
    // Check for critical keywords that override prediction
    const lowerText = transcript.toLowerCase();
    const criticalKeywords = ['chest pain', "can't breathe", 'cannot breathe', 'heart attack', 'stroke'];
    const hasCritical = criticalKeywords.some(k => lowerText.includes(k));
    
    let finalEmotion = prediction.emotion;
    if (hasCritical && prediction.emotion !== 'Critical') {
      console.log('⚠️ Critical keywords detected, overriding prediction');
      finalEmotion = 'Critical';
    }

    const urgency = EMOTION_TO_URGENCY[finalEmotion];
    const tone = EMOTION_TO_TONE[finalEmotion];

    // Generate voice quality descriptions based on emotion
    const voiceQuality: string[] = [];
    switch (finalEmotion) {
      case 'Calm':
        voiceQuality.push('Normal voice patterns', 'Stable tone');
        break;
      case 'Anxious':
        voiceQuality.push('Elevated pitch', 'Signs of anxiety');
        break;
      case 'Distressed':
        voiceQuality.push('Elevated pitch', 'Signs of distress detected');
        break;
      case 'In Pain':
        voiceQuality.push('Voice strain detected', 'Possible discomfort');
        break;
      case 'Weak/Tired':
        voiceQuality.push('Low voice volume', 'Possible fatigue');
        break;
      case 'Critical':
        voiceQuality.push('Requires immediate attention', 'Signs of distress detected');
        break;
    }

    return {
      emotion: finalEmotion,
      tone,
      urgency,
      voiceQuality,
      confidence: prediction.confidence,
      allProbabilities: prediction.probabilities
    };
  }

  /**
   * Retrain model with user feedback (online learning)
   */
  async retrainWithFeedback(audioFeatures: AudioFeatures[], correctEmotion: EmotionLabel) {
    if (!this.model) {
      await this.initialize();
    }

    const features = this.extractFeatures(audioFeatures);
    const emotionIdx = EMOTION_LABELS.indexOf(correctEmotion);

    const xs = tf.tensor2d([features]);
    const ys = tf.oneHot(tf.tensor1d([emotionIdx], 'int32'), EMOTION_LABELS.length);

    await this.model!.fit(xs, ys, {
      epochs: 5,
      verbose: 0
    });

    // Save updated model
    await this.model!.save('indexeddb://voice-emotion-model');
    console.log('✅ Model updated with user feedback');

    xs.dispose();
    ys.dispose();
  }
}

// Singleton instance
export const voiceEmotionModel = new VoiceEmotionModel();
