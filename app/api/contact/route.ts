import { sendAutoReply, sendContactEmail } from '@/lib/mail'
import { validateContactForm } from '@/lib/validators'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validate the form data
    const validation = validateContactForm(data)
    
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.error.issues },
        { status: 400 }
      )
    }

    const validatedData = validation.data

    // Send email to company
    const emailResult = await sendContactEmail(validatedData)
    
    if (!emailResult.success) {
      console.error('Failed to send contact email:', emailResult.error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // Send auto-reply to user
    const autoReplyResult = await sendAutoReply(validatedData)
    
    if (!autoReplyResult.success) {
      console.error('Failed to send auto-reply:', autoReplyResult.error)
      // Don't fail the request if auto-reply fails
    }

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        messageId: emailResult.messageId 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error in contact API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
} 