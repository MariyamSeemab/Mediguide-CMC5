// Test Script: Complete Appointment and Verify Sync
// Run this in browser console to test the complete flow

console.log('🧪 Starting Appointment Completion Test...\n');

// Step 1: Get central appointments
const centralData = localStorage.getItem('mediguide_appointments');
if (!centralData) {
    console.error('❌ No central appointments found');
} else {
    const centralAppointments = JSON.parse(centralData);
    console.log(`✅ Found ${centralAppointments.length} appointments in central storage\n`);
    
    // Find a confirmed appointment to complete
    const confirmedApt = centralAppointments.find(apt => apt.status === 'confirmed');
    
    if (!confirmedApt) {
        console.log('⚠️ No confirmed appointments to test with');
        console.log('Available statuses:', [...new Set(centralAppointments.map(a => a.status))]);
    } else {
        console.log('📋 Test Appointment:', {
            id: confirmedApt.id,
            patient: confirmedApt.patientName,
            patientEmail: confirmedApt.patientEmail,
            doctor: confirmedApt.doctorName,
            status: confirmedApt.status
        });
        
        // Step 2: Simulate completing the appointment
        console.log('\n🔄 Simulating completion...');
        
        // Update central storage
        const updatedCentral = centralAppointments.map(apt => {
            if (apt.id === confirmedApt.id) {
                return { ...apt, status: 'completed', updatedAt: new Date().toISOString() };
            }
            return apt;
        });
        
        localStorage.setItem('mediguide_appointments', JSON.stringify(updatedCentral));
        console.log('✅ Central storage updated to "completed"');
        
        // Step 3: Sync to patient storage
        const patientKey = `mediguide_appointments_${confirmedApt.patientEmail}`;
        const patientData = localStorage.getItem(patientKey);
        
        if (!patientData) {
            console.error(`❌ Patient storage not found: ${patientKey}`);
        } else {
            const patientAppointments = JSON.parse(patientData);
            console.log(`✅ Found ${patientAppointments.length} appointments in patient storage`);
            
            const patientAptIndex = patientAppointments.findIndex(apt => apt.id === confirmedApt.id);
            
            if (patientAptIndex === -1) {
                console.error('❌ Appointment not found in patient storage');
            } else {
                console.log(`✅ Found appointment at index ${patientAptIndex}`);
                console.log('   Current status:', patientAppointments[patientAptIndex].status);
                
                // Update patient storage
                patientAppointments[patientAptIndex].status = 'completed';
                localStorage.setItem(patientKey, JSON.stringify(patientAppointments));
                
                console.log('✅ Patient storage updated to "completed"');
                
                // Step 4: Verify
                console.log('\n🔍 Verification:');
                const verifyPatient = JSON.parse(localStorage.getItem(patientKey));
                const verifyApt = verifyPatient.find(apt => apt.id === confirmedApt.id);
                
                if (verifyApt && verifyApt.status === 'completed') {
                    console.log('✅ SUCCESS! Appointment is now completed in patient storage');
                    console.log('   Appointment ID:', verifyApt.id);
                    console.log('   Status:', verifyApt.status);
                    console.log('\n📱 Now refresh the patient appointments page and click "Completed" filter');
                } else {
                    console.error('❌ FAILED! Status not updated correctly');
                }
            }
        }
    }
}

console.log('\n🧪 Test Complete\n');
