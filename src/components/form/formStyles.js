import styled from "styled-components";

export const Container = styled.section`
  padding-top: 120px;
  padding-bottom: 120px;
  color: #aebcb9;
  letter-spacing: 1px;
  .container {
    max-width: 1140px;
    width: 100%;
    padding: 0 1rem;
    margin: auto;

    @media (max-width: 1024px) {
      max-width: 924px;
    }

    @media (max-width: 768px) {
      max-width: 750px;
    }

    @media (max-width: 425px) {
      max-width: 420px;
    }

    .section_heading {
      position: relative;
      margin-bottom: 5rem;
      h2 {
        color: #fff;
        font-size: 2.2rem;
        padding-left: 0.9rem;
        margin-bottom: 2rem;
        &::before {
          display: block;
          position: absolute;
          content: "";
          top: 6px;
          left: 0;
          width: 10px;
          height: 1.9rem;
          background: #fa163f;
        }
      }
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

  @media (max-width: 425px) {
    display: block;
  }

  .container_contact {
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;

    @media (max-width: 425px) {
      max-width:100%;
    }

    .contact_content {
      background: #2b2e41;
      padding: 30px;

      h4 {
        font-size: 20px;
        margin: 0;
        color: #fff;
        line-height: 1.75rem;
        font-weight: 700;
        margin-bottom: 10px;
      }
      p {
        line-height: 2.75rem;
      }
      ul {
        padding-top: 20px;
        list-style: none;

        li {
          line-height: 46px;
        }

        span {
          color: #fff;
          margin-right: 10px;
          width: 35px;
          height: 35px;
          text-align: center;
          line-height: 35px;
          background: #fa163f;
          display: inline-block;
        }
      }
    }
  }
`;

export const Form = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  padding: 0 15px;

  @media (max-width: 425px) {
    max-width: 100%;
    margin-top: 2rem;
  }

  input,
  textarea {
    color: #fff;
    background: #2b2e41;
    width: 100%;
    min-height: 45px;
    padding: 0 0 0 10px;
    font-size: 16px;
    display: block;
    box-sizing: border-box;
    margin-bottom: 29px;
    outline: #fa163f;
    border: 1px solid #141414;
    text-shadow: none;

    &:focus {
      border: 1px solid #fd4b57;
    }
  }

  textarea {
    height: 120px;
    padding: 10px 0 0 10px;
    box-sizing: border-box;
  }

  .btn-1 {
    width: 15rem;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 13px 15px;
    border: 2px solid #fa163f;
    color: #fff;
    background: #fa163f;
    transition: all linear 0.4s;
    cursor: pointer;

    &:hover {
      background: transparent;
    }
  }
`;
