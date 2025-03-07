/* eslint-disable react/prop-types */
import Image from "../../../atoms/img/Image"
import Icon from "../../../atoms/icons/Icon"
import profilePhoto from "../images/profilephoto.jpeg"
import globe from "../images/public.svg"
import Header from "../../../atoms/Header/Header"
import Flex from "../../../atoms/flex/Flex"
export default function PostHeader({name,headline}){
    const left=(
        <>
            <Image className="headerPhoto" src={profilePhoto}/>
            <Flex className="headerLeftContent" gap="gap-xs" alignItem="align-center" direction="column">
                <Flex className="wrapper1" alignItem="center" gap="xs">
                    <div className="postName">{name}</div>
                    <div className="relation">• You</div>
                </Flex>
                <div className="postAbout">{headline}</div>
                <Flex className="wrapper1" alignItem="center" gap="xs">
                    <div className="postTime">1w •</div>
                    <Image className="public" src={globe}/>
                </Flex>
            </Flex>
               
               
        </>
    );
    const right=<Icon icon="more_horiz"/>
    return(
       
        <Header leftContent={left} rightContent={right} />
    )
}