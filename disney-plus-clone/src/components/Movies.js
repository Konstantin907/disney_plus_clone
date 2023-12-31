import React from 'react'
import styled from "styled-components"

const Movies = () => {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
            <Wrap>
                <img src='/images/frozen.png' alt='' />
            </Wrap>

            <Wrap>
                <img src='/images/encanto.png' alt='' />
            </Wrap>

            <Wrap>
                <img src='/images/zootopia.png' alt='' />
            </Wrap>

            <Wrap>
                <img src='/images/tangled.png' alt='' />
            </Wrap>

            <Wrap>
                <img src='/images/luca2.png' alt='' />
            </Wrap>

            <Wrap>
                <img src='/images/littlemermaid.png' alt='' />
            </Wrap>

            <Wrap>
                <img src='/images/beautyandabeast.png' alt='' />
            </Wrap>

            <Wrap>
                <img src='/images/bao.png' alt='' />
            </Wrap>
      </Content>
    </Container>
  )
}

export default Movies


const Container = styled.div`

`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));
`

const Wrap = styled.div `
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.94) 0s;

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    &:hover{
        transform: scale(1.05);
        border: 4px solid rgba(249 249,249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }
`
