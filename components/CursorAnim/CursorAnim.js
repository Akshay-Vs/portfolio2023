"use client"
import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

export const CursorAnim = () => {
  return (
    <AnimatedCursor 
    color="255,255,255"
    innerSize={5}
    outerSize={50}
    innerScale={1}
    outerScale={1.7}
    outerAlpha={0}
    trailingSpeed={10}
    outerStyle={{
      border: '2px solid #fff',
      boxshadow: '#fff 0 1px 2px 20px'
    }}
    />
  )
}
