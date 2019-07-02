//  @ts-ignore-file
import React from 'react';
import { Svg, View } from 'react-sketchapp';
const { Defs, Path, G, Use } = Svg;

const SvgComponent = props => (
  <Svg width={12} height={12} {...props}>
    </Svg.Defs>
      <Svg.Path d="M0 0h12v12H0z" />
    </Svg.Defs>
    <Svg.G fill="none" fillRule="evenodd">
      <Svg.Path
        d="M7 3.25v3.5a.243.243 0 0 1-.07.18.245.245 0 0 1-.18.07h-2.5a.242.242 0 0 1-.18-.07.243.243 0 0 1-.07-.18v-.5c0-.073.023-.133.07-.18A.242.242 0 0 1 4.25 6H6V3.25c0-.073.023-.133.07-.18A.242.242 0 0 1 6.25 3h.5c.072 0 .133.023.18.07.047.047.07.107.07.18m2.68 4.883c.379-.652.57-1.362.57-2.133 0-.771-.191-1.481-.57-2.133A4.25 4.25 0 0 0 8.133 2.32 4.164 4.164 0 0 0 6 1.75c-.771 0-1.482.19-2.133.57A4.22 4.22 0 0 0 2.32 3.867 4.149 4.149 0 0 0 1.75 6c0 .771.189 1.481.57 2.133A4.22 4.22 0 0 0 3.867 9.68c.651.38 1.362.57 2.133.57.77 0 1.48-.19 2.133-.57A4.25 4.25 0 0 0 9.68 8.133m1.515-5.145C11.73 3.907 12 4.911 12 6s-.27 2.093-.805 3.012a5.982 5.982 0 0 1-2.183 2.183A5.878 5.878 0 0 1 6 12a5.868 5.868 0 0 1-3.012-.805A5.952 5.952 0 0 1 .805 9.012 5.863 5.863 0 0 1 0 6c0-1.089.268-2.093.805-3.012A5.952 5.952 0 0 1 2.988.805 5.868 5.868 0 0 1 6 0c1.088 0 2.092.269 3.012.805a5.982 5.982 0 0 1 2.183 2.183"
        fill="#B3B3B3"
      />
    </Svg.G>
  </Svg>
)
export default SvgComponent

