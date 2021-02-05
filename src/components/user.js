import React, { useEffect } from "react";
import land from "../assets/land.png";
import user from "../assets/user.png";
import mypage_title from "../assets/mypage_title.png";
import dotori_commit from "../assets/dotori_commit.png";
import lock from "../assets/lock.png";
import unlock from "../assets/unlock.png";
import download from "../assets/download.png";
import dotori_gray from "../assets/dotori_gray.png";
import styled from "styled-components";
import Header from "./header";

const Wrapper = styled.div`
    max-width: 1920px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${land});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center bottom;
`;
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
const ProfileBox = styled.div`
    width: 45%;
    text-align: center;
`;
const UserIcon = styled.img`
    width: 271px;
    height: 262px;
    padding-top: 25%;
`;
const UserName = styled.div`
    font-size: 30px;
    color: #755e4c;
    font-weight: bold;
    padding: 1rem 0;
`;
const UserInfo = styled.div`
    font-size: 17px;
    color: #755e4c;
`;
const ContentSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
`;
const Title = styled.img`
    width: 400px;
    height: 41px;
    padding: 3rem 0;
    margin: 0 auto;
`;
const ContentBox = styled.div`
    border-top: solid 0.7px #d2d2d2;
    width: 100%;
    flex: 1;
    max-height: 500px;
    display: flex;
    flex-wrap: wrap;
    padding-top: 2rem;
    overflow-y: scroll;
`;

const FeedBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 390px;
    margin: 1.3rem;
    align-items: center;
`;
const TitleBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 1rem 0;
    align-items: center;
`;
const Lock = styled.img`
    width: 35px;
    height: 33.8px;
    padding: 0 1rem;
`;
const DownLoad = styled.img`
    width: 34px;
    height: 32.8px;
`;
const Day = styled.div`
    font-size: 16px;
    color: #6e5ae7;
    flex: 1;
    text-align: right;
    padding-right: 4%;
`;

const CodeBox = styled.div`
    width: 390px;
    height: 148px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: ${(props) => {
        if (props.is_public) {
            return "solid 2px #755e4c";
        } else {
            return "solid 2px #d2d2d2";
        }
    }};
`;
const CommitIcon = styled.img`
    width: 62px;
    height: 62px;
`;
const CommitMsg = styled.div`
    font-size: 21px;
    font-weight: bold;
    color: ${(props) => {
        if (props.is_public) {
            return "#755e4c";
        } else {
            return "#d2d2d2";
        }
    }};
`;

const User = ({ history }) => {
    let userInfo = { name: "사용자", info1: "태원초등학교", info2: 2, info3: 3 };
    let feeds = [
        { user: "다람쥐1", day: 1, commit: "commit msg1", is_public: true },
        { user: "다람쥐2", day: 1, commit: "commit msg2", is_public: true },
        { user: "다람쥐3", day: 1, commit: "commit msg3", is_public: false },
        { user: "다람쥐4", day: 1, commit: "commit msg4", is_public: true },
        { user: "다람쥐5", day: 1, commit: "commit msg5", is_public: true },
    ];
    const movePage = (page) => {
        history.push(`/${page}`);
    };

    return (
        <Wrapper>
            <Header></Header>
            <ContentWrapper>
                <ProfileBox>
                    <UserIcon src={user}></UserIcon>
                    <UserName>{userInfo.name}</UserName>
                    <UserInfo>{`${userInfo.info1} ${userInfo.info2}학년 ${userInfo.info3}반`}</UserInfo>
                </ProfileBox>
                <ContentSection>
                    <Title src={mypage_title}></Title>
                    <ContentBox>
                        {feeds.map((feed) => {
                            return (
                                <FeedBox>
                                    <TitleBox>
                                        <Lock src={feed.is_public ? unlock : lock}></Lock>
                                        <DownLoad src={download}></DownLoad>
                                        <Day>{`${feed.day}일 전`}</Day>
                                        
                                    </TitleBox>
                                    <CodeBox is_public={feed.is_public}>
                                        <CommitIcon src={feed.is_public ? dotori_commit : dotori_gray}></CommitIcon>
                                        <CommitMsg is_public={feed.is_public}>{feed.commit}</CommitMsg>
                                    </CodeBox>
                                </FeedBox>
                            );
                        })}
                    </ContentBox>
                </ContentSection>
            </ContentWrapper>
        </Wrapper>
    );
};

export default User;