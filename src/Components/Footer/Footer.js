import React from "react";
import styled from "styled-components";
export const FooterSection = styled.div`
  width: 100%;
  /* height: 383px; */
  display: flex;
  flex-direction: column;
  .footer__gray__section {
    background-color: #e5e5e5;
    padding: 25px 165px 27px 165px;
    display: flex;
    justify-content: space-between;
    color: #5e6e89;
    font-size: 16px;
    font-weight: 400;
  }
  .footer__black_section {
    background-color: #272727;
    /* height: 80%; */
    padding: 60px 165px 115px 165px;
    .footer_info {
      margin-top: 16px;
      display: flex;
      .footer__logo__section {
        margin-right: 320px;
        color: white;
        display: flex;
        flex-direction: column;
        width: 250px;
        gap: 20px;
      }
      .info_column {
        color: #e1e1e1;
        font-weight: 500;
        display: flex;
        flex-direction: column;
        color: white;
        gap: 20px;
        margin-top: 43px;
        width: 168px;
      }
      .info_column :first-child {
        color: #56b280;
        margin-bottom: 5px;
      }
    }
  }
`;
export function Footer() {
  return (
    <FooterSection>
      <div className="footer__black_section">
        <hr></hr>
        <div className="footer_info">
          <div className="footer__logo__section">
            <img src="/img/logo-footer.png" alt="footer-logo" />
            <span>
              Your natural candle made for your home and for your wellness.
            </span>
          </div>
          <div className="info_column">
            <span>Discover</span>
            <span>New Season</span>
            <span>Most Searced</span>
            <span>Most Selled</span>
          </div>{" "}
          <div className="info_column">
            <span>About</span>
            <span>Help </span>
            <span>Shipping</span>
            <span>Affiliate</span>
          </div>{" "}
          <div className="info_column">
            <span>Info</span>
            <span>Contact us</span>
            <span>Privacy Policies</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
      <div className="footer__gray__section">
        <span>©Candleaf All Rights Reserved.</span>{" "}
        <span>Designed with ❤️ by uxbly</span>
      </div>
    </FooterSection>
  );
}
