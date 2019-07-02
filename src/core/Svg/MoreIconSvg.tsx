//  @ts-ignore-file
import React from 'react'
import { Svg} from 'react-sketchapp'
const {Defs, Path, G, Use } = Svg;
const SvgComponent = props => (
    <Svg  width={20} height={6} {...props}>
      <Svg.Defs>
        <Svg.Path d="M0 .322h5.678V6H0z" />
        <Svg.Path  d="M0 .322h5.678V6H0z" />
        <Svg.Path  d="M0 .322h5.678V6H0z" />
        
      </Svg.Defs>
      <Svg.G fill="none" fillRule="evenodd">
        <Svg.G transform="translate(0 -.322)">
          
          <Svg.Path
            d="M2.84.322a2.84 2.84 0 1 0 0 5.68 2.84 2.84 0 0 0 0-5.68"
            fill="#999"
          />
        </Svg.G>
        <Svg.G transform="translate(7 -.322)">
          
          <Svg.Path
            d="M2.84.322a2.84 2.84 0 1 0 0 5.68 2.84 2.84 0 0 0 0-5.68"
            fill="#999"
           
          />
        </Svg.G>
        <Svg.G transform="translate(14 -.322)">
         
          <Svg.Path
            d="M2.84.322a2.84 2.84 0 1 0 0 5.68 2.84 2.84 0 0 0 0-5.68"
            fill="#999"
           
          />
        </Svg.G>
      </Svg.G>
    </Svg>
)

export default SvgComponent
