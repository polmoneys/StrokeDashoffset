import { type ComponentProps, useEffect, useRef, cloneElement } from 'react'

type StrokeDashoffsetProps = ComponentProps<'svg'> & {
  children: JSX.Element
  progress: number
  pathLength?: number
  strokeColor?: string
  strokeWidth?: number
  svg?: JSX.Element
}

const StrokeDashoffset = ({
  children,
  progress,
  pathLength,
  strokeColor,
  strokeWidth,
  svg,
  ...svgProps
}: StrokeDashoffsetProps): JSX.Element => {
  const pathRef = useRef<SVGPathElement | null>(null)

  useEffect(() => {
    if (pathRef.current != null) {
      const path = pathRef.current
      const pathTotalLength = pathLength ?? path.getTotalLength()

      path.setAttribute('stroke-dasharray', pathTotalLength.toString())
      path.setAttribute('stroke-dashoffset', pathTotalLength.toString())

      if (strokeColor !== undefined) {
        path.setAttribute('stroke', strokeColor)
      }

      if (strokeWidth !== undefined) {
        path.setAttribute('stroke-width', strokeWidth.toString())
      }

      const updateSVG = (): void => {
        const progressOffset =
          pathTotalLength - pathTotalLength * (progress / 100)
        path.setAttribute('stroke-dashoffset', progressOffset.toString())
      }

      updateSVG()
    }
  }, [progress, pathLength, strokeColor, strokeWidth])

  const clonedPathElement = cloneElement(children, {
    ref: pathRef,
    shapeRendering: 'geometricPrecision',
  })

  return (
    <svg {...svgProps}>
      {children}
      {svg !== undefined && svg}
      {clonedPathElement}
    </svg>
  )
}

export default StrokeDashoffset
