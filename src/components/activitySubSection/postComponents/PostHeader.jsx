/* eslint-disable react/prop-types */
import Image from "../../../atoms/img/Image"
import Icon from "../../../atoms/icons/Icon"
import profilePhoto from "../../images/profilephoto.jpeg"
import globe from "../../images/public.svg"
import Header from "../../../atoms/Header/Header"
import Flex from "../../../atoms/flex/Flex"
import styles from "../../activity/Activity.module.scss"
import PostHeaderContent from "./postHeaderContent"

export default function PostHeader({ name, headline }) {
    const right = [{ type: Icon, props: { icon: "more_horiz" } }];
    const left = [
        { type: Image, props: { src: profilePhoto, className: styles.headerPhoto } },
        {type:PostHeaderContent,props:{name:name,headline:headline}}
        // {
        //     type: "div",
        //     props: {
        //         className: styles.headerLeftContent,
        //         children: [
        //             {
        //                 type: "div",
        //                 props: {
        //                     className: styles.wrapper1,
        //                     children: [
        //                         { type: "div", props: { className: styles.postName, children: name } },
        //                         { type: "div", props: { className: styles.relation, children: "• You" } }
        //                     ]
        //                 }
        //             },
        //             { type: "div", props: { className: styles.postAbout, children: headline } },
        //             {
        //                 type: "div",
        //                 props: {
        //                     className: styles.wrapper1,
        //                     children: [
        //                         { type: "div", props: { className: styles.postTime, children: "1w •" } },
        //                         { type: Image, props: { className: styles.public, src: globe } }
        //                     ]
        //                 }
        //             }
        //         ]
        //     }
        // }
    ];

    return <Header id={styles.postHeader} leftContent={left} rightContent={right} contentSize="xs" />;
}


