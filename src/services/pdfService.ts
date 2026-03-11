// PDF Generation Service for Medical Prescriptions
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import QRCode from 'qrcode';
import { Prescription } from './prescriptionService';

export const pdfService = {
  // Generate prescription PDF
  generatePrescriptionPDF: async (prescription: Prescription): Promise<void> => {
    try {
      // Create new PDF document
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      
      // Colors
      const primaryColor: [number, number, number] = [25, 119, 204]; // #1977cc
      const darkColor: [number, number, number] = [44, 62, 80]; // #2c3e50
      const grayColor: [number, number, number] = [108, 117, 125]; // #6c757d
      
      let yPosition = 20;

      // ===== PROFESSIONAL HEADER SECTION =====
      // Top border line
      doc.setDrawColor(...primaryColor);
      doc.setLineWidth(2);
      doc.line(0, 0, pageWidth, 0);
      
      // Header background - subtle gradient effect with two rectangles
      doc.setFillColor(240, 245, 250);
      doc.rect(0, 0, pageWidth, 35, 'F');
      
      // Left side - Mediguide branding
      doc.setTextColor(...primaryColor);
      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold');
      doc.text('MEDIGUIDE', 15, 15);
      
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...grayColor);
      doc.text('Digital Healthcare Platform', 15, 22);
      
      // Prescription label
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...darkColor);
      doc.text('MEDICAL PRESCRIPTION', 15, 30);
      
      // Right side - QR Code (smaller, professional size)
      const qrSize = 28;
      const qrX = pageWidth - qrSize - 10;
      const qrY = 5;
      
      // Generate and add QR Code
      const qrCodeDataUrl = await QRCode.toDataURL(prescription.verificationUrl, {
        width: 100,
        margin: 1,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      
      doc.addImage(qrCodeDataUrl, 'PNG', qrX, qrY, qrSize, qrSize);
      
      // QR Code label
      doc.setFontSize(6);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...grayColor);
      doc.text('Scan to Verify', qrX + (qrSize / 2), qrY + qrSize + 2, { align: 'center' });
      
      // Bottom border line
      doc.setDrawColor(200, 210, 220);
      doc.setLineWidth(0.5);
      doc.line(0, 38, pageWidth, 38);
      
      yPosition = 45;

      // ===== PRESCRIPTION ID & DATE =====
      doc.setTextColor(...darkColor);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(`Prescription No: ${prescription.prescriptionNumber}`, 15, yPosition);
      
      doc.setFontSize(8.5);
      doc.setTextColor(...grayColor);
      doc.setFont('helvetica', 'normal');
      const issueDate = new Date(prescription.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      doc.text(`Issue Date: ${issueDate}`, 15, yPosition + 6);
      
      yPosition += 14;

      // ===== DOCTOR INFORMATION =====
      doc.setFillColor(248, 250, 252);
      doc.roundedRect(15, yPosition, (pageWidth - 35) / 2 - 2, 28, 2, 2, 'F');
      doc.setDrawColor(220, 230, 240);
      doc.setLineWidth(0.3);
      doc.roundedRect(15, yPosition, (pageWidth - 35) / 2 - 2, 28, 2, 2, 'S');
      
      doc.setTextColor(...primaryColor);
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.text('DOCTOR INFORMATION', 18, yPosition + 5);
      
      doc.setTextColor(...darkColor);
      doc.setFontSize(9.5);
      doc.setFont('helvetica', 'bold');
      doc.text(prescription.doctorName, 18, yPosition + 11);
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(...grayColor);
      doc.text(`Reg. ID: ${prescription.doctorRegistrationId}`, 18, yPosition + 16);
      doc.text(`Specialization: ${prescription.doctorSpecialization}`, 18, yPosition + 21);
      
      // ===== PATIENT INFORMATION =====
      doc.setFillColor(248, 250, 252);
      doc.roundedRect((pageWidth / 2) + 3, yPosition, (pageWidth - 35) / 2 - 2, 28, 2, 2, 'F');
      doc.setDrawColor(220, 230, 240);
      doc.setLineWidth(0.3);
      doc.roundedRect((pageWidth / 2) + 3, yPosition, (pageWidth - 35) / 2 - 2, 28, 2, 2, 'S');
      
      doc.setTextColor(...primaryColor);
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.text('PATIENT INFORMATION', (pageWidth / 2) + 6, yPosition + 5);
      
      doc.setTextColor(...darkColor);
      doc.setFontSize(9.5);
      doc.setFont('helvetica', 'bold');
      doc.text(prescription.patientName, (pageWidth / 2) + 6, yPosition + 11);
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(...grayColor);
      doc.text(`Patient ID: ${prescription.patientId}`, (pageWidth / 2) + 6, yPosition + 16);
      if (prescription.patientAge) {
        doc.text(`Age: ${prescription.patientAge} years`, (pageWidth / 2) + 6, yPosition + 21);
      }
      if (prescription.patientGender) {
        doc.text(`Gender: ${prescription.patientGender}`, (pageWidth / 2) + 6, yPosition + 21 + (prescription.patientAge ? 0 : 5));
      }
      
      yPosition += 34;

      // ===== DIAGNOSIS =====
      doc.setTextColor(...primaryColor);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text('DIAGNOSIS', 20, yPosition);
      
      yPosition += 6;
      doc.setTextColor(...darkColor);
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      
      // Handle multi-line diagnosis
      const diagnosisLines = doc.splitTextToSize(prescription.diagnosis, pageWidth - 40);
      doc.text(diagnosisLines, 20, yPosition);
      yPosition += diagnosisLines.length * 4.5 + 4;

      // ===== MEDICATIONS TABLE =====
      doc.setTextColor(...primaryColor);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text('PRESCRIBED MEDICATIONS', 20, yPosition);
      
      yPosition += 4;

      // Prepare table data
      const tableData = prescription.medications.map((med, index) => [
        (index + 1).toString(),
        med.name,
        med.dosage || '-',
        med.duration || '-',
        med.instructions || '-'
      ]);

      // Generate table
      autoTable(doc, {
        startY: yPosition,
        head: [['#', 'Medicine Name', 'Dosage', 'Duration', 'Instructions']],
        body: tableData,
        theme: 'grid',
        headStyles: {
          fillColor: primaryColor,
          textColor: [255, 255, 255],
          fontStyle: 'bold',
          fontSize: 8
        },
        bodyStyles: {
          fontSize: 8,
          textColor: darkColor,
          cellPadding: 2
        },
        alternateRowStyles: {
          fillColor: [245, 247, 250]
        },
        columnStyles: {
          0: { cellWidth: 8, halign: 'center' },
          1: { cellWidth: 42 },
          2: { cellWidth: 28 },
          3: { cellWidth: 22 },
          4: { cellWidth: 'auto' }
        },
        margin: { left: 15, right: 15 }
      });

      // Get final Y position after table
      yPosition = (doc as any).lastAutoTable.finalY + 8;

      // ===== ADDITIONAL NOTES =====
      if (prescription.notes && prescription.notes.trim()) {
        doc.setTextColor(...primaryColor);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text('ADDITIONAL NOTES', 20, yPosition);
        
        yPosition += 6;
        doc.setTextColor(...darkColor);
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        
        const notesLines = doc.splitTextToSize(prescription.notes, pageWidth - 40);
        doc.text(notesLines, 20, yPosition);
        yPosition += notesLines.length * 3.5 + 8;
      }

      // ===== SIGNATURE & AUTHORIZATION SECTION =====
      // Check if we need a new page
      if (yPosition > pageHeight - 50) {
        doc.addPage();
        yPosition = 20;
      }

      const signatureY = yPosition;
      
      // Left side - Doctor Signature (No box, clean professional look)
      const sigStartX = 15;
      
      // Add signature image
      try {
        const signatureImg = new Image();
        signatureImg.src = '/signature.png';
        await new Promise((resolve, reject) => {
          signatureImg.onload = resolve;
          signatureImg.onerror = reject;
          setTimeout(reject, 1000);
        });
        
        if (signatureImg.complete && signatureImg.naturalHeight !== 0) {
          // Professional signature placement
          doc.addImage(signatureImg, 'PNG', sigStartX, signatureY, 50, 15);
        }
      } catch (error) {
        console.log('Signature image not loaded');
      }
      
      // Professional signature line
      doc.setDrawColor(40, 40, 40);
      doc.setLineWidth(0.8);
      doc.line(sigStartX, signatureY + 17, sigStartX + 60, signatureY + 17);
      
      // Doctor details - clean and professional
      doc.setTextColor(30, 30, 30);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(prescription.doctorName, sigStartX, signatureY + 23);
      
      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(80, 80, 80);
      doc.text(`Reg. No: ${prescription.doctorRegistrationId}`, sigStartX, signatureY + 28);
      
      doc.setFontSize(7.5);
      doc.text(prescription.doctorSpecialization, sigStartX, signatureY + 32);
      
      // Digital Signature ID
      doc.setFontSize(6.5);
      doc.setTextColor(120, 120, 120);
      doc.text(`Digital Signature: ${prescription.digitalSignature.substring(0, 24)}...`, sigStartX, signatureY + 36);
      
      // Right side - Professional Medical Stamp (Next to signature, not far right)
      const stampCenterX = sigStartX + 85;
      const stampCenterY = signatureY + 15;
      const outerRadius = 16;
      const innerRadius = 13;
      
      // Double border circles - professional medical stamp
      doc.setDrawColor(200, 16, 46); // Deep medical red
      doc.setLineWidth(1.5);
      doc.circle(stampCenterX, stampCenterY, outerRadius, 'S');
      
      doc.setLineWidth(0.8);
      doc.circle(stampCenterX, stampCenterY, innerRadius, 'S');
      
      // Very subtle background tint
      doc.setFillColor(200, 16, 46);
      doc.setGState(new doc.GState({ opacity: 0.05 }));
      doc.circle(stampCenterX, stampCenterY, outerRadius - 0.5, 'F');
      doc.setGState(new doc.GState({ opacity: 1 }));
      
      // Professional stamp text
      doc.setTextColor(180, 20, 40);
      doc.setFont('helvetica', 'bold');
      
      // Top text
      doc.setFontSize(5.5);
      doc.text('MEDIGUIDE', stampCenterX, stampCenterY - 6.5, { align: 'center' });
      
      // Center main text
      doc.setFontSize(7.5);
      doc.text('AUTHORIZED', stampCenterX, stampCenterY + 1, { align: 'center' });
      
      // Bottom text
      doc.setFontSize(5.5);
      doc.text('MEDICAL', stampCenterX, stampCenterY + 6.5, { align: 'center' });
      
      // Year at bottom
      doc.setFontSize(5);
      doc.text('2026', stampCenterX, stampCenterY + 11, { align: 'center' });
      
      yPosition = signatureY + 42;

      // ===== FOOTER =====
      const footerY = pageHeight - 25;
      
      // Footer background
      doc.setFillColor(245, 247, 250);
      doc.rect(0, footerY - 5, pageWidth, 30, 'F');
      
      // Footer border
      doc.setDrawColor(...primaryColor);
      doc.setLineWidth(0.5);
      doc.line(15, footerY - 5, pageWidth - 15, footerY - 5);
      
      // Footer text
      doc.setTextColor(...grayColor);
      doc.setFontSize(8);
      doc.setFont('helvetica', 'italic');
      doc.text('This is a digitally generated prescription from Mediguide', pageWidth / 2, footerY + 2, { align: 'center' });
      doc.text('For verification, scan the QR code or visit the verification URL', pageWidth / 2, footerY + 8, { align: 'center' });
      
      doc.setFontSize(7);
      doc.setFont('helvetica', 'normal');
      doc.text(`Verification URL: ${prescription.verificationUrl}`, pageWidth / 2, footerY + 14, { align: 'center' });
      
      // Page number
      doc.setFontSize(8);
      doc.text(`Page 1 of 1`, pageWidth - 20, pageHeight - 10, { align: 'right' });

      // ===== SAVE PDF =====
      const fileName = `Prescription_${prescription.prescriptionNumber}_${prescription.patientName.replace(/\s+/g, '_')}.pdf`;
      doc.save(fileName);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw new Error('Failed to generate prescription PDF. Please try again.');
    }
  },

  // Verify if user can download prescription
  canDownloadPrescription: (
    prescription: Prescription,
    currentUserEmail: string,
    currentUserRole: 'doctor' | 'patient'
  ): boolean => {
    if (currentUserRole === 'doctor') {
      return prescription.doctorId === currentUserEmail;
    } else if (currentUserRole === 'patient') {
      return prescription.patientId === currentUserEmail;
    }
    return false;
  }
};
