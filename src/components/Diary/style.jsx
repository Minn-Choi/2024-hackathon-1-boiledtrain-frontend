import styled from "styled-components";
import '../../styles/font.css';

export const DiaryHeadContainer = styled.div`
  display: flex;
  flex-direction:column;
  width: 430px;
  height: 46px;
  padding-top: 1px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap:19px;
  padding-top:19px;
`;

export const HeadTitle = styled.div`
color: #00ABFC;
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
font-family: 'Pretendard';
font-size: 18.7px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-right:250px;
`;

export const DiaryLine = styled.div`
width: 430px;
height: 2px;
background: #AFAFAF;
`;

export const DiaryBoxContainer = styled.div`
width: 360px;
/* height: 258px; */
flex-shrink: 0;
display:flex;
flex-direction:column;
align-items:flex-start;
gap:10px;
padding-left:35px;
padding-top:10px;
padding-bottom:10px;
`;

export const BoxTitle = styled.div`
width: 360px;
color: #000;
font-feature-settings: 'clig' off, 'liga' off;
font-family: 'Pretendard';
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
white-space: nowrap; 
overflow: hidden; 
text-overflow: ellipsis;
`;

export const BoxPhoto = styled.img`
width: 360px;
height: 170px;
border-radius: 10px;
background: var(--Miscellaneous-Kit-Section-Fill, #F5F5F5);
`;

export const BoxContent = styled.div`
  width: 100%; 
  color: #8C8C8C;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: 'Pretendard';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
`;


export const BoxDate = styled.div`
color: #AFAFAF;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Pretendard;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const Bar = styled.div`
color: #AFAFAF;
font-feature-settings: 'clig' off, 'liga' off;
font-family: 'Pretendard';
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const BoxStation = styled.div`
color: #AFAFAF;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Pretendard;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const BoxLine = styled.div`
width: 360px;
height: 1px;
flex-shrink: 0;
background: #D9D9D9;
`;

export const DateStation = styled.div`
display:flex;
flex-direction:row;
height:25px;
align-items:center;
gap:4px;
`;

export const DiaryPlusContainer = styled.div`
width: 430px;
height: 159px;
flex-shrink: 0;
border-radius: 117px;
background: #D4F2FF;
transform: translateX(0px);

position: absolute;
bottom: 0px;
`;

export const MentBtn = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
padding-top:31px;
gap:7px;
background: transparent;
border: none;
cursor: pointer;
`;

export const PlusMent = styled.div`
width: 60px;
height: 28.116px;
flex-shrink: 0;
color: #00ABFC;
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
font-family: 'Pretendard';
font-size: 20px;
font-style: normal;
padding-top:2px;
font-weight: 700;
line-height: normal;
`;

export const PlusImage = styled.img`
width: 23px;
height: 22.299px;
flex-shrink: 0;
padding-top:3.5px;
`;

export const DiaryEmptyContainer = styled.div`
display: flex;
flex-direction:column;
width: 430px;
height: 157px;
justify-content: center;
align-items: center;
flex-shrink: 0;
gap:18px;
`;

export const EmptyTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
`;
export const EmptyTitle = styled.div`
color: #00ABFC;
text-align: center;
font-family: 'Pretendard';
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24.2px;
`;
export const EmptyPhoto = styled.img`
width: 90px;
height: 90px;
flex-shrink: 0;
`;

export const MenuContainer=styled.div`
  position: absolute;
  transform: translate(150%,20%);
  width: 160px;
  height: 100px;
  border-radius: 15px;
  border: 1px solid #D9D9D9;
  background: #FFF;
  box-shadow: 0px 4px 4.8px 0px rgba(0, 0, 0, 0.25);
`;
export const MenuButton = styled.button`
  border-radius: 15px;
  padding-top:20px;
  height:24px;
  width:160px;
  background-color: inherit;
  border:0;
  display:flex;
  justify-content:center;
  align-items:center;
  color: #000;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family:'Pretendard';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor:pointer;
`;

export const MenuButton2 = styled.button`
  border-radius: 15px;
  padding-top:10px;
  padding-bottom:10px;
  height:24px;
  width:160px;
  background-color: inherit;
  border:0;
  display:flex;
  justify-content:center;
  align-items:center;
  color: #FF453A;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family:'Pretendard';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor:pointer;
`;

export const Hr = styled.hr`
  width:70%;
  margin-top:20px;
`;