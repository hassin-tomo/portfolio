import React from "react";
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap';
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import wordpressImage from "../Images/wordpress.jpg";
import profileImage from "../Images/ZEPETO.gif";

const HomePage = () => {
  return(
    <div className="container text-center">
    <h1>とも</h1>

    <img src={profileImage} className="profileImage" />

    <p class="introduction">
      Tomonari Matsunagaです。主にHTML/CSS/Javascriptメインに取り扱っていますが、PHPやReactにも幅を広げてます。趣味はスマホゲーム（<a href="https://pubgmobile.jp/" target="_blank">PUBG Mobile</a>）です。
    </p>
    <p>
      PUBG Mobileでは3年以上、最大40人を超えるメンバーのクランの隊長を勤め、クラン内外を含めた交流会や大会の企画も行ったりしてます。
    </p>

    <section class="page-section" id="services">
      <div className="service">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
          <h3 class="section-subheading text-muted mb-5">
            私が作った作品一覧です
          </h3>
        </div>
        <div class="row text-center">
          <div class="col-md-4">
            <a href="https://parfaiteria-largo.com/" target="_blank">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
            </a>
            <h4 class="my-3">レスポンシブサイト</h4>
            <p class="text-muted">
            SEO with analysis using GoogleAnalytics, which increased access to the site by 20 times in one month over the initial period of publication.
            </p>
          </div>
          <div class="col-md-4">
            <Link to="/design">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-ghost fa-stack-1x fa-inverse"></i>
              </span>
            </Link>
            <h4 class="my-3">デザイン</h4>
            <p class="text-muted">
            I create parts for email newsletters and banners and thumbnails for e-commerce stores.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="skill">
      <div class="text-center">
        <h1 class="title">スキル</h1>
        <div class="row text-center">
          <div class="col-md-4 services">
            <img src={reactImage} />
            <h4>React</h4>
            <p>Reactがつかえます</p>
          </div>
          <div class="col-md-4 services">
            <img src={jsImage} />
            <h4>HTML/CSS/JavaScript</h4>
            <p>HTML/CSS/JSがつかえます</p>
          </div>
          <div class="col-md-4 services">
            <img src={wordpressImage} />
            <h4>WordPress</h4>
            <p>WordPressがつかえます</p>
          </div>
        </div>
        {/* <button type="button" class="btn btn-primary">
          スキル一覧
        </button> */}
      </div>
    </section>
  </div>
  )
};
export default HomePage;
