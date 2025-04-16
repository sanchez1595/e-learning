'use client'

// Este es un layout simplificado para evitar problemas con el manifest en Vercel
import { useState } from "react"
import Link from "next/link"

export default function PublicLayout({
  children,
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {children}
    </div>
  )
} 