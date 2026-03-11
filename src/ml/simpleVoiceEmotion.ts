import { AudioFeatures } from '../utils/voiceEmotionAnalyzer';

export interface VoiceEmotionResult {
  emotion: string;
  tone: string;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  voiceQuality: string[];
  confidence: number;
  debugInfo: {
    volume: number;
    pitch: number;
    energy: number;
    stability: number;
  };
}

/**
 * SIMPLE, REAL-TIME Voice Emotion Detection
 * Uses direct audio feature thresholds that respond immediately to voice changes
 */
export function analyzeVoiceEmotionSimple(
  audioFeatures: AudioFeatures[],
  transcript: string
): VoiceEmotionResult {
  
  if (audioFeatures.length === 0) {
    return {
      emotion: 'Calm',
      tone: 'Normal',
      urgency: 'low',
      voiceQuality: ['No audio data'],
      confidence: 0,
      debugInfo: { volume: 0, pitch: 0, energy: 0, stability: 0 }
    };
  }

  // Calculate REAL audio metrics
  const rmsValues = audioFeatures.map(f => f.rms || 0).filter(v => v > 0);
  const zcrValues = audioFeatures.map(f => f.zcr || 0).filter(v => v > 0);
  const energyValues = audioFeatures.map(f => f.energy || 0).filter(v => v > 0);
  const centroidValues = audioFeatures.map(f => f.spectralCentroid || 0).filter(v => v > 0);
  const rolloffValues = audioFeatures.map(f => f.spectralRolloff || 0).filter(v => v > 0);

  const avgRMS = rmsValues.reduce((a, b) => a + b, 0) / rmsValues.length;
  const maxRMS = Math.max(...rmsValues);
  
  // FIX: ZCR from Meyda is in wrong scale - normalize it
  let avgZCR = zcrValues.reduce((a, b) => a + b, 0) / zcrValues.length;
  if (avgZCR > 1) {
    // Meyda returns ZCR as count, not rate - normalize to 0-1 range
    avgZCR = avgZCR / 100; // Convert to proper scale
  }
  
  const avgEnergy = energyValues.reduce((a, b) => a + b, 0) / energyValues.length;
  const avgCentroid = centroidValues.reduce((a, b) => a + b, 0) / centroidValues.length;
  const avgRolloff = rolloffValues.reduce((a, b) => a + b, 0) / rolloffValues.length;

  // Calculate stability (variance)
  const rmsMean = avgRMS;
  const rmsVariance = rmsValues.reduce((sum, val) => sum + Math.pow(val - rmsMean, 2), 0) / rmsValues.length;
  const stability = Math.sqrt(rmsVariance);

  // Speech rate
  const words = transcript.trim().split(/\s+/).filter(w => w.length > 0);
  const duration = audioFeatures.length * 0.1;
  const speechRate = words.length / (duration || 1);

  console.log('🎤 REAL-TIME VOICE ANALYSIS:');
  console.log(`   Volume (RMS): ${avgRMS.toFixed(4)} | Max: ${maxRMS.toFixed(4)} ${avgRMS < 0.01 ? '⚠️ TOO QUIET - Speak louder!' : avgRMS > 0.02 ? '✅ Good' : '⚠️ Quiet'}`);
  console.log(`   Pitch (ZCR): ${avgZCR.toFixed(4)} ${avgZCR > 0.12 ? '(HIGH)' : avgZCR > 0.06 ? '(normal)' : '(low)'}`);
  console.log(`   Energy: ${avgEnergy.toFixed(4)}`);
  console.log(`   Centroid: ${avgCentroid.toFixed(0)} Hz`);
  console.log(`   Rolloff: ${avgRolloff.toFixed(0)} Hz`);
  console.log(`   Stability: ${stability.toFixed(4)}`);
  console.log(`   Speech Rate: ${speechRate.toFixed(2)} words/sec`);
  console.log(`   Words: "${transcript}"`);

  // Check for critical medical keywords in ALL languages
  const lowerText = transcript.toLowerCase();
  const criticalKeywords = [
    // English
    'chest pain', "can't breathe", 'cannot breathe', 'heart attack', 'stroke', 'bleeding heavily',
    // Hindi
    'सीने में दर्द', 'छाती में दर्द', 'सांस नहीं', 'सांस नहीं आ रही', 'दिल का दौरा', 'हार्ट अटैक',
    // Tamil
    'மார்பு வலி', 'மூச்சு விட முடியவில்லை', 'இதய தாக்குதல்',
    // Telugu
    'ఛాతీ నొప్పి', 'శ్వాస తీసుకోలేకపోతున్నాను', 'గుండె నొప్పి',
    // Bengali
    'বুকে ব্যথা', 'শ্বাস নিতে পারছি না', 'হার্ট অ্যাটাক',
    // Marathi
    'छातीत दुखत आहे', 'श्वास घेता येत नाही', 'हृदयविकाराचा झटका',
    // Gujarati
    'છાતીમાં દુખાવો', 'શ્વાસ લઈ શકતો નથી', 'હાર્ટ એટેક',
    // Kannada
    'ಎದೆ ನೋವು', 'ಉಸಿರಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ', 'ಹೃದಯಾಘಾತ',
    // Malayalam
    'നെഞ്ചുവേദന', 'ശ്വസിക്കാൻ കഴിയുന്നില്ല', 'ഹൃദയാഘാതം',
    // Punjabi
    'ਛਾਤੀ ਵਿੱਚ ਦਰਦ', 'ਸਾਹ ਨਹੀਂ ਲੈ ਸਕਦਾ', 'ਦਿਲ ਦਾ ਦੌਰਾ',
    // Odia
    'ଛାତିରେ ଯନ୍ତ୍ରଣା', 'ନିଶ୍ୱାସ ନେଇପାରୁନାହିଁ', 'ହୃଦଘାତ',
    // Assamese
    'বুকুত বিষ', 'উশাহ ল\'ব নোৱাৰো', 'হৃদৰোগ',
    // Urdu
    'سینے میں درد', 'سانس نہیں لے سکتا', 'دل کا دورہ'
  ];
  const hasCritical = criticalKeywords.some(k => lowerText.includes(k));

  // SIMPLE, DIRECT THRESHOLDS that work with real microphones
  let emotion = 'Calm';
  let tone = 'Normal';
  let urgency: 'low' | 'medium' | 'high' | 'critical' = 'low';
  let confidence = 0;
  const voiceQuality: string[] = [];

  // Score each emotion (0-100)
  let calmScore = 50; // START WITH HIGHER BASE - default to calm unless stress detected
  let anxiousScore = 0;
  let distressedScore = 0;
  let painScore = 0;
  let weakScore = 0;
  let criticalScore = 0;

  // CRITICAL: Keywords override everything
  if (hasCritical) {
    criticalScore = 100;
  } else {
    // Volume scoring - FOCUS ON CHANGES, NOT ABSOLUTE LEVELS
    // Calculate relative volume change (compare to max)
    const volumeRatio = maxRMS > 0 ? avgRMS / maxRMS : 1;
    
    if (maxRMS > 0.02) {
      // User is capable of speaking louder - they ARE speaking loud
      if (avgRMS > 0.015) {
        // VERY LOUD relative to their baseline
        distressedScore += 60;
        criticalScore += 50;
        painScore += 40;
        calmScore = 0;
        console.log('   🔴 VERY LOUD voice detected (relative to baseline)!');
      } else if (avgRMS > 0.008) {
        // LOUD relative to baseline
        distressedScore += 45;
        painScore += 45;
        anxiousScore += 35;
        calmScore = 5;
        console.log('   🟠 LOUD voice detected (relative to baseline)!');
      } else {
        // Normal volume
        calmScore += 30;
        console.log('   ✅ Normal volume');
      }
    } else {
      // Quiet microphone - DON'T penalize, just use relative changes
      if (volumeRatio > 0.8) {
        // Speaking at their maximum - could be stressed
        anxiousScore += 20;
        console.log('   🟡 Speaking at maximum volume (may indicate stress)');
      } else if (volumeRatio > 0.5) {
        // Normal speaking for quiet mic
        calmScore += 30;
        console.log('   ✅ Normal speaking (quiet mic detected)');
      } else {
        // Very quiet even for quiet mic - possible weakness
        weakScore += 25;
        console.log('   🟡 Very quiet speaking');
      }
    }

    // Pitch scoring (ZCR) - DETECT REAL CHANGES
    // Normal ZCR is around 0.4-0.5 for speech
    if (avgZCR > 0.65) {
      // VERY HIGH PITCH - stressed/anxious
      anxiousScore += 50;
      distressedScore += 40;
      calmScore -= 30;
      console.log('   🔴 VERY HIGH pitch detected!');
    } else if (avgZCR > 0.55) {
      // HIGH PITCH - worried
      anxiousScore += 40;
      painScore += 30;
      calmScore -= 20;
      console.log('   🟠 HIGH pitch detected!');
    } else if (avgZCR > 0.50) {
      // SLIGHTLY HIGH PITCH
      anxiousScore += 20;
      console.log('   🟡 Slightly high pitch');
    } else if (avgZCR > 0.35) {
      // NORMAL PITCH - most speech falls here
      calmScore += 30;
      console.log('   ✅ Normal pitch');
    } else if (avgZCR > 0.25) {
      // SLIGHTLY LOW PITCH - still normal
      calmScore += 20;
      console.log('   ✅ Slightly low pitch (normal)');
    } else {
      // VERY LOW PITCH - possible weakness
      weakScore += 20;
      console.log('   🟡 Very low pitch');
    }

    // Stability scoring - DETECT REAL INSTABILITY
    if (stability > 0.008) {
      // VERY UNSTABLE - shaky voice
      anxiousScore += 40;
      distressedScore += 35;
      painScore += 30;
      calmScore -= 25;
      console.log('   🔴 VERY UNSTABLE voice detected!');
    } else if (stability > 0.004) {
      // UNSTABLE
      anxiousScore += 25;
      distressedScore += 20;
      calmScore -= 15;
      console.log('   🟠 UNSTABLE voice detected!');
    } else if (stability > 0.002) {
      // SLIGHTLY UNSTABLE
      anxiousScore += 10;
      console.log('   🟡 Slightly unstable');
    } else {
      // STABLE - steady voice
      calmScore += 30;
      console.log('   ✅ Stable voice');
    }

    // Energy scoring - RELATIVE TO VOLUME
    // Energy should be evaluated relative to volume
    const energyRatio = avgRMS > 0 ? avgEnergy / avgRMS : 1;
    
    if (avgEnergy > 0.08) {
      // VERY HIGH ENERGY (absolute)
      distressedScore += 40;
      criticalScore += 35;
      anxiousScore += 30;
      calmScore = 0;
      console.log('   🔴 VERY HIGH energy!');
    } else if (avgEnergy > 0.04) {
      // HIGH ENERGY (absolute)
      anxiousScore += 30;
      painScore += 25;
      calmScore -= 15;
      console.log('   🟠 HIGH energy!');
    } else if (energyRatio > 10) {
      // High energy RELATIVE to volume - stressed
      anxiousScore += 25;
      distressedScore += 20;
      console.log('   🟠 HIGH relative energy (stress indicator)!');
    } else if (avgEnergy > 0.015 || energyRatio > 5) {
      // NORMAL ENERGY
      calmScore += 25;
      console.log('   ✅ Normal energy');
    } else if (avgEnergy > 0.008) {
      // LOW ENERGY
      weakScore += 15;
      console.log('   🟡 LOW energy');
    } else {
      // VERY LOW ENERGY - only if truly minimal
      weakScore += 30;
      console.log('   🟡 VERY LOW energy');
    }

    // Spectral features - ADD MORE DETECTION
    if (avgCentroid > 200) {
      // VERY BRIGHT/STRESSED voice
      anxiousScore += 30;
      distressedScore += 25;
      console.log('   🟠 VERY bright/stressed voice quality');
    } else if (avgCentroid > 150) {
      // BRIGHT/STRESSED voice
      anxiousScore += 20;
      distressedScore += 15;
      console.log('   🟡 Bright/stressed voice quality');
    } else if (avgCentroid > 80) {
      // NORMAL voice quality
      calmScore += 20;
      console.log('   ✅ Normal voice quality');
    }

    if (avgRolloff > 18000) {
      // VERY STRAINED voice
      painScore += 35;
      distressedScore += 30;
      console.log('   🔴 SEVERE voice strain detected!');
    } else if (avgRolloff > 16000) {
      // STRAINED voice
      painScore += 25;
      distressedScore += 20;
      console.log('   🟠 Voice strain detected!');
    } else if (avgRolloff > 12000) {
      // NORMAL high frequency content
      calmScore += 15;
      console.log('   ✅ Normal voice spectrum');
    }

    // Speech rate - MORE SENSITIVE
    if (speechRate > 3.0) {
      // VERY FAST SPEECH - high anxiety
      anxiousScore += 40;
      distressedScore += 30;
      calmScore -= 25;
      console.log('   🔴 VERY FAST speech detected!');
    } else if (speechRate > 2.2) {
      // FAST SPEECH - anxiety
      anxiousScore += 30;
      distressedScore += 20;
      calmScore -= 15;
      console.log('   🟠 FAST speech detected!');
    } else if (speechRate > 1.5) {
      // SLIGHTLY FAST
      anxiousScore += 15;
      console.log('   🟡 Slightly fast speech');
    } else if (speechRate > 0.8) {
      // NORMAL SPEECH RATE
      calmScore += 25;
      console.log('   ✅ Normal speech rate');
    } else if (speechRate > 0.5) {
      // SLOW SPEECH
      weakScore += 15;
      console.log('   🟡 Slow speech');
    } else {
      // VERY SLOW SPEECH
      weakScore += 30;
      console.log('   🟡 Very slow speech');
    }
  }

  // Find winner
  const scores = {
    'Calm': Math.max(0, calmScore), // Ensure no negative scores
    'Anxious': Math.max(0, anxiousScore),
    'Distressed': Math.max(0, distressedScore),
    'In Pain': Math.max(0, painScore),
    'Weak/Tired': Math.max(0, weakScore),
    'Critical': Math.max(0, criticalScore)
  };

  console.log('📊 EMOTION SCORES:');
  Object.entries(scores).forEach(([emo, score]) => {
    const bar = '█'.repeat(Math.round(score / 5));
    console.log(`   ${emo.padEnd(12)} ${score.toString().padStart(3)} ${bar}`);
  });

  const maxScore = Math.max(...Object.values(scores));
  const winner = Object.entries(scores).find(([_, score]) => score === maxScore);
  
  if (winner) {
    emotion = winner[0];
    confidence = Math.min(maxScore / 100, 1.0); // Cap at 100%
  }

  // If Calm has a strong lead OR no clear stress signals, default to Calm
  if (calmScore >= 100 || (calmScore > 60 && calmScore >= maxScore * 0.9)) {
    emotion = 'Calm';
    confidence = Math.max(0.75, confidence);
    console.log('🔒 Defaulting to Calm - no strong stress signals detected');
  }

  // Set tone and urgency based on emotion
  switch (emotion) {
    case 'Calm':
      tone = 'Normal';
      urgency = 'low';
      voiceQuality.push('Normal voice patterns', 'Stable tone');
      break;
    case 'Anxious':
      tone = 'Worried';
      urgency = 'medium';
      voiceQuality.push('Elevated pitch', 'Signs of anxiety');
      if (avgRMS > 0.05) voiceQuality.push('Elevated voice level');
      break;
    case 'Distressed':
      tone = 'Urgent';
      urgency = 'high';
      voiceQuality.push('Elevated pitch', 'Signs of distress detected');
      if (avgRMS > 0.08) voiceQuality.push('Elevated voice level');
      break;
    case 'In Pain':
      tone = 'Strained';
      urgency = 'high';
      voiceQuality.push('Voice strain detected', 'Possible discomfort');
      if (avgRolloff > 8000) voiceQuality.push('High frequency strain');
      break;
    case 'Weak/Tired':
      tone = 'Low energy';
      urgency = 'medium';
      voiceQuality.push('Low voice volume', 'Possible fatigue');
      break;
    case 'Critical':
      tone = 'Emergency';
      urgency = 'critical';
      voiceQuality.push('Requires immediate attention', 'Signs of distress detected');
      if (hasCritical) voiceQuality.push('Critical keywords detected');
      break;
  }

  console.log(`\n✅ DETECTED: ${emotion} (${(confidence * 100).toFixed(0)}% confidence)`);
  console.log(`   Tone: ${tone}`);
  console.log(`   Urgency: ${urgency.toUpperCase()}`);
  console.log(`   Quality: ${voiceQuality.join(', ')}\n`);

  return {
    emotion,
    tone,
    urgency,
    voiceQuality,
    confidence,
    debugInfo: {
      volume: avgRMS,
      pitch: avgZCR,
      energy: avgEnergy,
      stability
    }
  };
}
