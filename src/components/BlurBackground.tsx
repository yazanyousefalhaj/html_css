import React from 'react'

interface Props {
  children: React.ReactElement<any>[]
}

export const BlurBackground: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className='ellipses'>
        <svg width='1440' height='1297' viewBox='0 0 1440 1297' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle opacity='0.3' cx='1219' cy='860' r='437' fill='#27AE60' />
          <circle opacity='0.3' cx='568' cy='655' r='128' fill='#BB6BD9' />
          <circle opacity='0.3' cx='220' cy='220' r='220' fill='#56CCF2' />
          <circle opacity='0.3' cx='1388' cy='127' r='251' fill='#F2994A' />
          <defs>
            <filter
              id='filter0_b'
              x='-100'
              y='-100'
              width='1640'
              height='1224'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feGaussianBlur in='BackgroundImage' stdDeviation='50' />
              <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur' result='shape' />
            </filter>
          </defs>
        </svg>
      </div>

      <div className='blur-bg'>{children}</div>
    </>
  )
}
