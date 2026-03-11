import Meyda from 'meyda';

export interface EmotionAnalysis {
  emotion: string;
  tone: string;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  voiceQuality: string[];
}

export interface AudioFeatures {
  rms: number;
  zcr: number;
  energy: number;
  spectralCentroid: number;
  spectralRolloff: number;
  spectralFlux?: number; // Optional - may not be available
  mfcc: number[];
  loudness: { total: number };
  spectralSpread: number;
}

export function analyzeVoiceEmotion(
  audioFeatures: AudioFeatures[],
  transcript: string
): EmotionAnalysis {
  if (audioFeatures.length === 0) {
    console.warn('⚠️ No audio features collected');
    return {
      emotion: 'Calm',
      tone: 'Normal',
      urgency: 'low',
      voiceQuality: ['No audio data'],
    };
  }

  console.log(`🎤 Analyzing ${audioFeatures.length} audio feature frames`);

  // === AGGREGATE REAL AUDIO FEATURES FROM MEYDA ===

  // 1. RMS (Root Mean Square) - Volume/Loudness
  const rmsValues = audioFeatures.map((f) => f.rms || 0).filter((v) => v > 0);
  const avgRMS = rmsValues.reduce((a, b) => a + b, 0) / rmsValues.length;
  const maxRMS = Math.max(...rmsValues);

  // 2. ZCR (Zero Crossing Rate) - Pitch indicator
  const zcrValues = audioFeatures.map((f) => f.zcr || 0).filter((v) => v > 0);
  const avgZCR = zcrValues.reduce((a, b) => a + b, 0) / zcrValues.length;

  // 3. Energy - Signal strength
  const energyValues = audioFeatures.map((f) => f.energy || 0).filter((v) => v > 0);
  const avgEnergy = energyValues.reduce((a, b) => a + b, 0) / energyValues.length;

  // 4. Spectral Centroid - Brightness of sound (stress indicator)
  const centroidValues = audioFeatures
    .map((f) => f.spectralCentroid || 0)
    .filter((v) => v > 0);
  const avgCentroid = centroidValues.reduce((a, b) => a + b, 0) / centroidValues.length;

  // 5. Spectral Rolloff - High frequency content (voice strain)
  const rolloffValues = audioFeatures
    .map((f) => f.spectralRolloff || 0)
    .filter((v) => v > 0);
  const avgRolloff = rolloffValues.reduce((a, b) => a + b, 0) / rolloffValues.length;

  // 6. Spectral Flux - Rate of change (emotional instability)
  const fluxValues = audioFeatures
    .map((f) => f.spectralFlux || 0)
    .filter((v) => v > 0);
  const avgFlux = fluxValues.reduce((a, b) => a + b, 0) / fluxValues.length;

  // 7. Loudness - Perceptual loudness
  const loudnessValues = audioFeatures
    .map((f) => f.loudness?.total || 0)
    .filter((v) => v > 0);
  const avgLoudness = loudnessValues.reduce((a, b) => a + b, 0) / loudnessValues.length;

  // 8. Spectral Spread - Variance in frequency (voice instability)
  const spreadValues = audioFeatures
    .map((f) => f.spectralSpread || 0)
    .filter((v) => v > 0);
  const avgSpread = spreadValues.reduce((a, b) => a + b, 0) / spreadValues.length;

  // 9. RMS Variance - Voice stability over time
  const rmsMean = avgRMS;
  const rmsVariance =
    rmsValues.reduce((sum, val) => sum + Math.pow(val - rmsMean, 2), 0) / rmsValues.length;
  const rmsStdDev = Math.sqrt(rmsVariance);

  // 10. Speech Rate
  const words = transcript.trim().split(/\s+/).filter((w) => w.length > 0);
  const estimatedDuration = audioFeatures.length * 0.1; // ~100ms per frame
  const speechRate = words.length / (estimatedDuration || 1);

  console.log('🎵 REAL Audio Features (Meyda):', {
    avgRMS: avgRMS.toFixed(4),
    maxRMS: maxRMS.toFixed(4),
    avgZCR: avgZCR.toFixed(4),
    avgEnergy: avgEnergy.toFixed(4),
    avgCentroid: avgCentroid.toFixed(2) + ' Hz',
    avgRolloff: avgRolloff.toFixed(2) + ' Hz',
    avgFlux: avgFlux.toFixed(4),
    avgLoudness: avgLoudness.toFixed(2),
    avgSpread: avgSpread.toFixed(2),
    rmsStdDev: rmsStdDev.toFixed(4),
    speechRate: speechRate.toFixed(2) + ' words/sec',
    wordCount: words.length,
    frameCount: audioFeatures.length,
  });

  // === TEXT ANALYSIS FOR MEDICAL CONTEXT ===
  const lowerText = transcript.toLowerCase();

  const criticalKeywords = [
    'chest pain',
    "can't breathe",
    'cannot breathe',
    'bleeding heavily',
    'unconscious',
    'heart attack',
    'stroke',
    'choking',
    'seizure',
    'सीने में दर्द',
    'सांस नहीं',
    'மார்பு வலி',
    'శ్వాస',
    'বুকে ব্যথা',
  ];

  const severeKeywords = [
    'severe',
    'intense',
    'unbearable',
    'extreme',
    'terrible',
    'excruciating',
    'very bad',
    'गंभीर',
    'तीव्र',
    'असहनीय',
    'बहुत',
    'கடுமையான',
    'மிகவும்',
    'తీవ్రమైన',
    'చాలా',
    'গুরুতর',
  ];

  const painKeywords = [
    'pain',
    'hurt',
    'ache',
    'sore',
    'burning',
    'sharp',
    'throbbing',
    'painful',
    'hurts',
    'दर्द',
    'पीड़ा',
    'வலி',
    'నొప్పి',
    'ব্যথা',
    'દુખાવો',
    'ನೋವು',
    'വേദന',
    'ਦਰਦ',
  ];

  const anxietyKeywords = [
    'worried',
    'scared',
    'anxious',
    'nervous',
    'panic',
    'afraid',
    'frightened',
    'stress',
    'चिंतित',
    'डर',
    'பயம்',
    'கவலை',
    'ఆందోళన',
    'భయం',
    'উদ্বিগ্ন',
    'ચિંતા',
    'ಚಿಂತೆ',
  ];

  const weaknessKeywords = [
    'weak',
    'tired',
    'exhausted',
    'dizzy',
    'faint',
    'fatigue',
    'drowsy',
    'कमजोर',
    'थका',
    'பலவீனம்',
    'సోర్వు',
    'দুর্বল',
    'નબળા',
    'ದುರ್ಬಲ',
  ];

  const hasCritical = criticalKeywords.some((k) => lowerText.includes(k));
  const hasSevere = severeKeywords.some((k) => lowerText.includes(k));
  const hasPain = painKeywords.some((k) => lowerText.includes(k));
  const hasAnxiety = anxietyKeywords.some((k) => lowerText.includes(k));
  const hasWeakness = weaknessKeywords.some((k) => lowerText.includes(k));

  console.log('📝 Medical Keywords:', {
    hasCritical,
    hasSevere,
    hasPain,
    hasAnxiety,
    hasWeakness,
  });

  // === REAL EMOTION CLASSIFICATION BASED ON AUDIO SCIENCE ===

  // Define thresholds based on audio research
  const isLoudVoice = avgRMS > 0.08 || maxRMS > 0.15 || avgLoudness > -20;
  const isVeryLoud = avgRMS > 0.12 || maxRMS > 0.20;
  const isHighPitch = avgZCR > 0.12 || avgCentroid > 2500;
  const isVeryHighPitch = avgZCR > 0.15 || avgCentroid > 3000;
  const isUnstableVoice = rmsStdDev > 0.08 || avgFlux > 0.15 || avgSpread > 1500;
  const isVeryUnstable = rmsStdDev > 0.12 || avgFlux > 0.25;
  const isFastSpeech = speechRate > 2.5;
  const isVeryFastSpeech = speechRate > 3.5;
  const isQuietVoice = avgRMS < 0.02 && avgEnergy < 0.015;
  const isStrainedVoice = avgRolloff > 8000 && avgRMS > 0.06;
  const hasHighFrequency = avgCentroid > 2800; // Stress indicator

  let emotion = 'Calm';
  let tone = 'Normal';
  let urgency: 'low' | 'medium' | 'high' | 'critical' = 'low';
  const voiceQuality: string[] = [];

  // CRITICAL: Life-threatening + extreme vocal distress
  if (hasCritical || (hasSevere && hasPain && (isVeryLoud || isVeryUnstable))) {
    emotion = 'Critical';
    tone = 'Emergency';
    urgency = 'critical';
    voiceQuality.push('Requires immediate attention');
    if (isVeryLoud) voiceQuality.push('Elevated voice level');
    if (isVeryUnstable) voiceQuality.push('Signs of distress detected');
  }
  // HIGH: Severe pain with real vocal strain indicators
  else if (
    (hasSevere && hasPain) ||
    (hasPain && isStrainedVoice) ||
    (hasPain && isLoudVoice && isHighPitch) ||
    (isVeryLoud && isUnstableVoice && hasPain)
  ) {
    emotion = 'In Pain';
    tone = 'Strained';
    urgency = 'high';
    voiceQuality.push('Voice strain detected');
    if (isLoudVoice) voiceQuality.push('Elevated voice level');
    if (isStrainedVoice) voiceQuality.push('Possible discomfort');
  }
  // HIGH: Distressed (multiple stress indicators)
  else if (
    (hasSevere && isUnstableVoice) ||
    (isVeryLoud && isVeryHighPitch && isFastSpeech) ||
    (isVeryUnstable && hasHighFrequency)
  ) {
    emotion = 'Distressed';
    tone = 'Urgent';
    urgency = 'high';
    voiceQuality.push('Elevated pitch');
    voiceQuality.push('Signs of distress detected');
  }
  // MEDIUM: Anxiety (real acoustic anxiety markers)
  else if (
    hasAnxiety ||
    (isFastSpeech && isHighPitch) ||
    (isUnstableVoice && isVeryFastSpeech) ||
    (hasHighFrequency && isFastSpeech)
  ) {
    emotion = 'Anxious';
    tone = 'Worried';
    urgency = 'medium';
    voiceQuality.push('Elevated pitch');
    voiceQuality.push('Signs of anxiety');
  }
  // MEDIUM: Weakness/fatigue (low energy markers)
  else if (hasWeakness || isQuietVoice) {
    emotion = 'Weak/Tired';
    tone = 'Low energy';
    urgency = 'medium';
    voiceQuality.push('Low voice volume');
    voiceQuality.push('Possible fatigue');
  }
  // MEDIUM: Pain mentioned
  else if (hasPain) {
    emotion = 'In Pain';
    tone = 'Strained';
    urgency = 'medium';
    voiceQuality.push('Possible discomfort');
    if (avgRMS > 0.05) voiceQuality.push('Voice strain detected');
  }
  // LOW: Normal/calm
  else {
    emotion = 'Calm';
    tone = 'Normal';
    urgency = 'low';
    voiceQuality.push('Normal voice patterns');
    voiceQuality.push('Stable tone');
  }

  console.log('✅ Emotion Classification:', {
    emotion,
    tone,
    urgency,
    voiceQuality,
    indicators: {
      isLoudVoice,
      isVeryLoud,
      isHighPitch,
      isVeryHighPitch,
      isUnstableVoice,
      isVeryUnstable,
      isFastSpeech,
      isVeryFastSpeech,
      isQuietVoice,
      isStrainedVoice,
      hasHighFrequency,
    },
  });

  return { emotion, tone, urgency, voiceQuality };
}

export function createMeydaAnalyzer(
  audioContext: AudioContext,
  source: MediaStreamAudioSourceNode,
  onFeatures?: (features: any) => void
): any {
  return Meyda.createMeydaAnalyzer({
    audioContext,
    source,
    bufferSize: 2048,
    featureExtractors: [
      'rms',
      'zcr',
      'energy',
      'spectralCentroid',
      'spectralRolloff',
      // 'spectralFlux', // REMOVED - causes error in Meyda
      'mfcc',
      'loudness',
      'spectralSpread',
    ],
    callback: onFeatures || null,
  });
}
