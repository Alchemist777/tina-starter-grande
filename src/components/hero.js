import React from "react"
import styled, { css } from "styled-components"
import { transparentize } from "polished"
import { Wrapper, Overlay, LinkButton } from "../components/style"
import BackgroundImage from "gatsby-background-image"

export const Hero = ({ hero }) => {
  return (
    <>
      <HeroBackground>
        {hero.overlay && <Overlay />}
        {hero.image && (
          <HeroImage fluid={hero.image.childImageSharp.fluid}></HeroImage>
        )}
      </HeroBackground>
      <HeroContent>
        {hero.headline && <Headline>{hero.headline}</Headline>}
        {hero.textline && <Textline>{hero.textline}</Textline>}
        {hero.ctas && (
          <Actions>
            {Object.keys(hero.ctas).map(key => {
              return (
                <LinkButton
                  primary={hero.ctas[key].primary}
                  to={hero.ctas[key].link}
                >
                  {hero.ctas[key].label}
                  {hero.ctas[key].arrow && <span>&nbsp;&nbsp;→</span>}
                </LinkButton>
              )
            })}
          </Actions>
        )}
      </HeroContent>
    </>
  )
}

const HeroContent = styled.div`
  display: block;
`

const HeroBackground = styled.div`
  position: relative !important;
  width: 100%;
  z-index: 0;
  background-color: ${props => transparentize(0.1, props.theme.color.primary)};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2.5rem 0 9rem 0;
  margin-bottom: -8.5rem;

  ${Overlay} {
    z-index: 1;
  }

  ${Wrapper} {
    z-index: 2;

    > * {
      margin-bottom: 1.5rem;

      &:last-child {
        margin-bottom: 2rem;
      }
    }
  }
`

export const Headline = styled.h2`
  font-size: 2.6em;
  line-height: 1.2;
  color: ${props => props.theme.color.white};
  word-spacing: 1px;
  font-weight: 700;
  text-transform: none;
`

export const Textline = styled.p`
  font-size: 1.3rem;
  line-height: 1.2;
  color: ${props => props.theme.color.secondary};
  word-spacing: 1px;
  font-weight: 500;
  text-transform: none;
  padding-bottom: 0.3rem;
`

export const Actions = styled.div`
  padding-bottom: 0.5rem;
  > * {
    margin-right: 1rem;
  }
`

export const HeroImage = styled(BackgroundImage)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
