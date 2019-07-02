import  React, {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Text, View, makeSymbol } from 'react-sketchapp';
import styled, {css} from 'styled-components/primitives';
import VBox from '../../../../core/Layout/VBox';
import HBox from '../../../../core/Layout/HBox';
import PodcastIconSvg from '../../../../core/Svg/podcastIconSvg';
import CloseIconSvg from '../../../../core/Svg/CloseIconSvg';
import DragItemIconSvg from '../../../../core/Svg/DragItemIconSvg';
import MoreIconSvg from '../../../../core/Svg/MoreIconSvg';
import Album from '../../../../core/Album';
import { useDocument } from '../../../../context/DocumentContext';
import P from '../../../../core/Text/P';
import { MenuButtonLeftSelected } from '../../../../core/Button/MenuButton';


const StyledHBox = styled(HBox)`
    background-color:${(props={hover:false})=> props.hover ? '#F2F2F2' : '#ffffff'};
`

const ListItem = ({hover,edit}:any) => {
    const [state]:any = useDocument();
    const isMobile = state.width <=320;
    const [editItem,setEditItem] = useState(edit);

    return (
<VBox>
                  <StyledHBox hover={hover} >
                  <Album hover={hover}  width={state.width <=320 ? 50 : 100} />
                  <VBox style={{paddingLeft:5,paddingTop:5, width:edit ? 100 : 200}}>
                    <P >{'do 06 jun 05:45'}</P>
                    <HBox style={{}}>
                      <MenuButtonLeftSelected style={{fontSize:10,paddingTop:2,paddingBottom:2,margin:0}}/>
                      <P style={{backgroundColor:'#ffffff',marginTop:4,paddingLeft:5,paddingRight:5,paddingTop:0,height:12}}>{'Podvia #17'}</P>
                    </HBox>
                    <P>{`Maakt [${editItem}] massatoerisme  de wereld onleefbaar?`}</P>
                  </VBox>
                  </StyledHBox>
                  <View style={{position:"absolute",top:20,right:0}}>
                  <TouchableWithoutFeedback onLongPress={()=>setEditItem(!editItem)}>
                    <HBox style={{paddingRight:10}} >

                      {
                        
                         edit
                        ? <React.Fragment>
                          <CloseIconSvg/>
                         {!isMobile &&  <View style={{width:10}}/>}
                         {!isMobile &&    <PodcastIconSvg/>}
                         
                        <View style={{width:10}}/>
                            <P style={{width:'auto'/*,align:'right'*/, marginTop:2}}>{'20 min'}</P>
                        <View style={{width:10}}/>
                        
                        <DragItemIconSvg style={{marginTop:2}}/>
                      </React.Fragment>
                      
                      :<React.Fragment>
                          <P style={{width:'auto'/*,align:'right'*/, marginTop:2}}>{'20 min'}</P>
                            <View style={{width:10}}/>
                              <PodcastIconSvg/>
                            <View style={{width:10}}/>
                         
                          <MoreIconSvg style={{marginTop:6}}/>
                          
                        </React.Fragment>
                      }
                    </HBox>
                  </TouchableWithoutFeedback>
                  </View>
                
                </VBox>
    )
}


export default ListItem