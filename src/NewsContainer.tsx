import styled from "styled-components";
import { convertToObject } from "typescript";
import MockData from "./MockData.json";
import NewsCard from "./NewsCard";

interface ButtonProps {
  isPrimary: boolean;
}

export default function NewsContainer(props:any) {
  return <Container>
    <NewsTitle>
      News that you may find interesting
    </NewsTitle>
    <NewsCardContainer>
    {MockData.map(newsCard => (
        <NewsCard keyCard={newsCard.key} newsTitle={newsCard.title} newsContent={newsCard.content} newsDateTime={newsCard.dateTime} newsKeyword={newsCard.newsKeyword} newsImage={newsCard.newsImage}/>
    ))}
    </NewsCardContainer>
    <ButtonsContainer>
     <CustomButton isPrimary={false}>Saved News</CustomButton>
     <CustomButton isPrimary>View More News</CustomButton>
    </ButtonsContainer>
  </Container>;
}

const NewsCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const NewsTitle = styled.h4`
  width: 100%;
  align-self: left;
  margin: 0;
  margin-left: 40px;
  font-weight: 400;
`

const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 585px;
  padding: 20px;
  //height: 722px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  color: #3177B8;
  background-color: white;
  justify-content: space-evenly;
  align-items: center;
  gap: 25px;
  border-radius: 12px;
`;

const ButtonsContainer = styled.div`
  margin: 35px 0 20px 0;
  width: 545px;
  font-weight: 300;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CustomButton = styled.button<ButtonProps>` 
  height: 38.57px;
  padding: 10px;
  border-radius: 5px;
  width: ${p => p.isPrimary ? "176px" : "131px"};
  color: ${p => p.isPrimary ? "white" : "#2488eb"};
  background-color: ${p => p.isPrimary ? "#2488eb" : "white"};
  border: 1px solid ${p => p.isPrimary ? "white" : "#2488eb"};
`;

