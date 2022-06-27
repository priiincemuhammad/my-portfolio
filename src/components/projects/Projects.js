import React from 'react';
import styled from 'styled-components';
import Singleproject from './Singleproject';

const Projects = () => {
  return (
    <Container>
      <Content>
        <h1 className="heading">Some Things I've Built</h1>
        <Allprojects>
          <Singleproject />
        </Allprojects>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
`;
const Content = styled.div`
  width: 1140px;
  margin: 0 auto;
  padding: 100px 50px;
  .heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    font-weight: 600;
    line-height: 1.1;
    width: 100%;
    font-size: clamp(26px, 5vw, 30px);
    color: #ccd6f6;
    white-space: nowrap;
    &::before {
      position: relative;
      bottom: 0px;
      counter-increment: section 3;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--main-color);
      font-family: var(--font-mono);
      font-size: 20px;
      font-weight: 300;
    }
    &::after {
      content: '';
      display: block;
      position: relative;
      top: 2px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: #233554;
    }
    @media (max-width: 774px) {
      &::after {
        width: 20%;
      }
    }
  }
`;
const Allprojects = styled.div`
  color: #fff;
`;
export default Projects;
