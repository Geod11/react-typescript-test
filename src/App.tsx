import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import NewsCard from './NewsCard';
import NewsContainer from './NewsContainer';
import styled, { createGlobalStyle } from 'styled-components';
import MockData from "./MockData.json"

const CustomTheme = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`


function App() {
  console.log(MockData)
  return (
    <>
    <CustomTheme/>
    <div className="App" /*style={{backgroundColor: "gray", height: 700}}*/>
       <NewsContainer />
       {/* <h2>TITLE</h2> */}
       {/* {MockData.map(newsCard => (
        <NewsCard keyCard={newsCard.key} newsTitle={newsCard.title} newsContent={newsCard.content} newsDateTime={newsCard.dateTime} newsKeyword={newsCard.newsKeyword} />
       ))} */}
       {/* <NewsCard/>
       <NewsCard/>
       <NewsCard/>
       <NewsCard/>        */}
       {/* </NewsContainer>     */}
       
    </div>
    </>
  );
}

export default App;

