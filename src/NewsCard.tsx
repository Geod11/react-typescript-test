import styled from "styled-components";

//create interface with props for this component
interface NewsCardProps {
  keyCard: number;
  newsTitle: string;
  newsContent: string;
  newsDateTime: string;
  newsKeyword: string;
  newsImage: string; 
}

export default function NewsCard(props: NewsCardProps) {
  console.log(props, "-->All the props")
  const {newsTitle, newsContent, newsDateTime, newsKeyword, newsImage} = props

//onClickHandler function

  return (
    
    <Container>
      <NewsImg  alt="Test" src={newsImage}></NewsImg>
      <ContentWrapper>
        <NewsTitle>{newsTitle}</NewsTitle>
        <NewsContent>
          {newsContent}
        </NewsContent>
        <NewsTimeDate>{newsDateTime}</NewsTimeDate>
      </ContentWrapper>
      <KeyordFavouriteWrapper>
        <Keyword>{newsKeyword}</Keyword>
        <FavouriteIconButton> 
          <FavouriteIcon/>
        </FavouriteIconButton>
      </KeyordFavouriteWrapper>
    </Container>
    
  );
}

const Container = styled.div`
  width: 545px;
  height: 109.29px;
  color: gray;
  background-color: white;
  display: flex;
  
`;

const NewsImg = styled.img`
  width: 125px; 
  height: 109.29px; 
  object-fit: cover;
  border: black;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
`;

const ContentWrapper = styled.div`
  height: 109.29px;
  width: 400px;
  display: block;
  font-size: 15px;
  background-color: #E7EBEF;
  //max-height: 109.29px;
  align-items: left;
  padding-left: 1%;
  text-align: left;
  justify-content: space-between;
`;

const NewsTitle = styled.h4`
font-size: 16px;
font-weight: 600;
color: #666666;
margin-top: 0;
margin-bottom: 0;
padding-top: 1%;
font-weight: 600;
`;

const NewsContent = styled.p`
display: -webkit-box;
color: #939393;
width: 65ch;
font-size: 10px;
font-weight: 600;
overflow: hidden;
text-overflow: ellipsis;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
`;

const NewsTimeDate = styled.small`
color: #B4B4B4;
font-size: 8px;
font-weight: 400;
margin-bottom: 0;
`;

const KeyordFavouriteWrapper = styled.div`
//height: 109.29px;
font-size: 13px;
display: flex;
flex-direction: column;
padding-bottom: 9%;
background-color: #E7EBEF;
border-top-right-radius: 12px;
border-bottom-right-radius: 12px;
width: 75px;
align-items: center;
justify-content: space-around;
`;

const Keyword = styled.small`
font-size: 10px;
font-weight: 300;
`;

const FavouriteIcon = styled.div``;

const FavouriteIconButton = styled.button`
width: 10px;
height: 10px;
background-color: red;
border-radius: 100%;
`;

