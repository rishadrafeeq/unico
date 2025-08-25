import nodemailer from 'nodemailer'
import type { ContactFormData } from './validators'

// Create transporter
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// Verify transporter configuration
export const verifyTransporter = async () => {
  try {
    await transporter.verify()
    console.log('SMTP server is ready to take our messages')
    return true
  } catch (error) {
    console.error('SMTP server error:', error)
    return false
  }
}

// Send contact form email
export const sendContactEmail = async (data: ContactFormData) => {
  const { name, email, company, service, message } = data

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
        New Contact Form Submission
      </h2>
      
      <div style="margin: 20px 0;">
        <h3 style="color: #374151; margin-bottom: 15px;">Contact Details:</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 30%;">Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">
              <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
            </td>
          </tr>
          ${company ? `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Company:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${company}</td>
          </tr>
          ` : ''}
          ${service ? `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Service:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${service}</td>
          </tr>
          ` : ''}
        </table>
      </div>
      
      <div style="margin: 20px 0;">
        <h3 style="color: #374151; margin-bottom: 15px;">Message:</h3>
        <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb;">
          ${message.replace(/\n/g, '<br>')}
        </div>
      </div>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">
        <p>This email was sent from the Unico website contact form.</p>
        <p>Timestamp: ${new Date().toLocaleString()}</p>
      </div>
    </div>
  `

  const emailText = `
    New Contact Form Submission
    
    Name: ${name}
    Email: ${email}
    ${company ? `Company: ${company}` : ''}
    ${service ? `Service: ${service}` : ''}
    
    Message:
    ${message}
    
    Timestamp: ${new Date().toLocaleString()}
  `

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `New Contact Form Submission from ${name}`,
      text: emailText,
      html: emailHtml,
    })

    console.log('Email sent: %s', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error }
  }
}

// Send auto-reply email to the user
export const sendAutoReply = async (data: ContactFormData) => {
  const { name, email } = data

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">Thank You, ${name}!</h1>
      </div>
      
      <div style="padding: 30px; background-color: #ffffff;">
        <p style="font-size: 16px; color: #374151; margin-bottom: 20px;">
          Thank you for contacting Unico. We've received your message and will get back to you within 24 hours.
        </p>
        
        <div style="background-color: #f0f9ff; border-left: 4px solid #2563eb; padding: 15px; margin: 20px 0;">
          <p style="margin: 0; color: #1e40af; font-weight: 500;">What happens next?</p>
          <ul style="color: #374151; margin: 10px 0 0 20px;">
            <li>We'll review your project requirements</li>
            <li>Schedule a consultation call to discuss details</li>
            <li>Provide a detailed proposal and timeline</li>
          </ul>
        </div>
        
        <p style="color: #374151;">
          In the meantime, feel free to explore our services or check out our FAQ page for answers to common questions.
        </p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${process.env.NEXT_PUBLIC_SITE_URL}/services" 
             style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
            Explore Our Services
          </a>
        </div>
      </div>
      
      <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0; color: #6b7280; font-size: 14px;">
          Best regards,<br>
          The Unico Team
        </p>
        <p style="margin: 10px 0 0 0; color: #6b7280; font-size: 12px;">
          This is an automated response. Please do not reply to this email.
        </p>
      </div>
    </div>
  `

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Thank you for contacting Unico - We\'ll be in touch soon!',
      html: emailHtml,
    })

    console.log('Auto-reply sent: %s', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error sending auto-reply:', error)
    return { success: false, error }
  }
} 