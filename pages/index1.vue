<template>
  <div class="index-home">
    <div class="index-content" style="position: relative">
      <div id="three-container"></div>
      <!-- <div :style="transformBoxStyle" class="transform-banner">
        <img :style="transformImgStyle" src="~@/assets/test.webp" alt=""/>
      </div> -->
      <div class="ot"></div>
      <div class="topdiv" style="position: relative">
        <div class="text">
          <p>EMPOWER GAMEFI</p>
          <!-- <p>PROJECTS</p> -->
          <p>GATHER PLAYERS WITH</p>
          <p>HIGH CONSENSUS</p>
        </div>
        <div class="describe">
          <p class="describeadd">M</p>
          ultiverse Play (MVP in short) is a Decentralized Autonomous
          Organization (DAO) that empowers GameFi projects and gathers players
          with high consensus
        </div>
      </div>
    </div>
    <!-- // 模拟底部内容 -->
    <!-- 500px的空白内容作为模型放大的背景 -->
    <!-- 修改这个高度可以调整“下一屏”出现的时机 -->
    <div style="height: 400px">
    </div>
    <!-- 下一屏内容，暂时使用v-if 使得模型放大到一定程度后，显出下一屏内容，v-if或者其他动画效果来生成下一屏幕的错觉，其实都在一个页面滚动 -->
    <guide v-if="camera.fov < 10"></guide>
    <div style="height: 800px">
    </div>
    <div class="index-content">
      <div class="topdiv3">
        <transition name="Fade">
          <div v-if="istitle1" class="title1" style="margin-bottom: 70px">
            <img class="icon" src="~/assets/titleicon.png" alt="" />
            HIGHLIGHTS
          </div>
        </transition>
        <div class="divimg">
          <img
            style="position: absolute; z-index: -1"
            :style="tranformopcityTop"
            class="imgbanner"
            src="../assets/indedbanner/light1.png"
            alt=""
          />
          <img
            style="position: absolute; z-index: -1"
            :style="tranformopcityTop"
            class="imgpng2"
            src="../assets/indedbanner/top1.png"
            alt=""
          />
          <transition name="Fade2">
            <img
              style="position: absolute; z-index: -1"
              :style="tranformopcityTop"
              class="imgpng"
              v-if="tranformopcity2"
              src="../assets/indedbanner/topicon1.png"
              alt=""
            />
          </transition>
        </div>
        <transition name="Fade1">
          <div v-if="tranformopcity1" class="lighttext1">
            <p>The Global Leading</p>
            <p>Fully-automatic P2E</p>
            <p>Management Platform</p>
          </div>
        </transition>
        <transition name="Fade">
          <div class="lightdesc1" v-if="tranformopcity3">
            <p :style="{ opacity: tranformopcity == 1 ? '1' : '0.5' }">
              Maximize capital utilization
            </p>
            <p :style="{ opacity: tranformopcity == 2 ? '1' : '0.5' }">
              Full process automation + Proof of gaming
            </p>
            <p :style="{ opacity: tranformopcity == 3 ? '1' : '0.5' }">
              $10Mn/mo estimated income in One Year
            </p>
          </div>
        </transition>
      </div>
      <div class="topdiv4">
        <transition name="Fade">
          <div v-if="istitle1" class="title1">
            <img class="icon" src="~/assets/titleicon.png" alt="" />
            HIGHLIGHTS
          </div>
        </transition>
        <div>
          <img
            style="position: absolute; z-index: 1"
            :style="topdiv4Top"
            class="imgpng2"
            src="../assets/indedbanner/top2.png"
            alt=""
          />
          <img
            style="position: absolute"
            :style="topdiv4Top"
            class="imgbanner"
            src="../assets/indedbanner/light2.png"
            alt=""
          />
          <transition name="Fade2">
            <img
              v-if="tranformopcity5"
              :style="topdiv4Top"
              class="imgpng"
              src="../assets/indedbanner/topicon2.png"
              alt=""
            />
          </transition>
          <transition name="Fade1">
            <div class="lighttext2" v-if="tranformopcity4">
              <p>Go-To-Market:</p>
              <p>First users are</p>
              <p>ready</p>
            </div>
          </transition>
          <transition name="Fade">
            <div class="lightdesc2" v-if="tranformopcity6">
              <p :style="{ opacity: tranformopcitydiv3 == 1 ? '1' : '0.5' }">
                A Sub-DAO (P2E guild) with 40k+ users
              </p>
              <p
                :style="{ opacity: tranformopcitydiv3 == 2 ? '1' : '0.5' }"
                style="opacity: 1"
              >
                2,000+ influencers
              </p>
              <p :style="{ opacity: tranformopcitydiv3 == 3 ? '1' : '0.5' }">
                100+ 3rd P2E Guilds (Over 400K scholars)
              </p>
            </div>
          </transition>
        </div>
      </div>
      <div class="topdiv5">
        <transition name="Fade">
          <div v-if="istitle1" class="title" style="margin-bottom: 70px">
            <img class="icon" src="~/assets/titleicon.png" alt="" />
            HIGHLIGHTS
          </div>
        </transition>
        <div>
          <img
            style="position: absolute; z-index: -1"
            :style="topdiv5Top"
            class="imgbanner"
            src="../assets/indedbanner/light1.png"
            alt=""
          />
          <img
            style="position: absolute; z-index: -1"
            :style="topdiv5Top"
            class="imgpng2"
            src="../assets/indedbanner/top3.png"
            alt=""
          />
          <transition name="Fade2"
            ><img
              :style="topdiv5Top"
              v-if="tranformopcity8"
              class="imgpng"
              src="../assets/indedbanner/topicon3.png"
              alt=""
          /></transition>
          <transition name="Fade1">
            <div v-if="tranformopcity7" class="lighttext3">
              <p>Two Sub-DAOs</p>
              <p>Established to</p>
              <p>Support Developers</p>
            </div>
          </transition>
          <transition name="Fade">
            <div class="lightdesc3" v-if="tranformopcity9">
              <p :style="{ opacity: tranformopcitydiv4 == 1 ? '1' : '0.5' }">
                Bring Web2.0 developers into Web3.0
              </p>
              <p :style="{ opacity: tranformopcitydiv4 == 2 ? '1' : '0.5' }">
                Provide Web3.0 Go-to-Market solution to developers
              </p>
              <p :style="{ opacity: tranformopcitydiv4 == 3 ? '1' : '0.5' }">
                17 game partners (until April 20th)
              </p>
            </div>
          </transition>
        </div>
      </div>
      <div class="topdiv6">
        <transition name="Fade">
          <div v-if="istitle1" class="title" style="margin-bottom: 70px">
            <img class="icon" src="~/assets/titleicon.png" alt="" />
            HIGHLIGHTS
          </div>
        </transition>
        <div>
          <img
            style="position: absolute"
            :style="topdiv6Top"
            class="imgbanner"
            src="../assets/indedbanner/light2.png"
            alt=""
          />
          <img
            style="position: absolute"
            :style="topdiv6Top"
            class="imgpng2"
            src="../assets/indedbanner/top4.png"
            alt=""
          />

          <transition name="Fade2">
            <img
              :style="topdiv6Top"
              v-if="tranformopcity11"
              class="imgpng"
              src="../assets/indedbanner/topicon4.png"
              alt=""
            />
          </transition>
          <transition name="Fade1">
            <div v-if="tranformopcity10" class="lighttext4">
              <p>Serial Entrepreneurs</p>
              <p>with</p>
              <p>Successful Web2 +</p>
              <p>Web3 Exp.</p>
            </div>
          </transition>
          <transition name="Fade">
            <div v-if="tranformopcity12" class="lightdesc4">
              <p :style="{ opacity: tranformopcitydiv5 == 1 ? '1' : '0.5' }">
                Web3: Tap Fantasy/CEBG/HADO/Cardingo…etc
              </p>
              <p :style="{ opacity: tranformopcitydiv5 == 2 ? '1' : '0.5' }">
                Web2: NetBoom/Warframe/QuantGroup…etc
              </p>
              <p :style="{ opacity: tranformopcitydiv5 == 3 ? '1' : '0.5' }">
                Capable of converting gamers from web2 to web3
              </p>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="index-content" style="margin-top: 100px">
      <div class="title">
        <img class="icon" src="~/assets/titleicon.png" alt="" />
        LATESTNEWS
      </div>

      <div class="gameswipe">
        <div class="swiper-content">
          <swiper ref="mySwiper" :options="swiperOption" class="show-swiper">
            <swiper-slide v-for="(item, index) in gamePicList" :key="index">
              <div class="swiper-item" @click.stop="toNews(item.url)">
                <img :src="item.img" alt="" />
                <p class="swipertext">{{ item.title }}</p>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import guide from "@/components/guide.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
 import * as THREE from "three";
  import {OrbitControls} from '../assets/js/OrbitControls.js';
  import {FBXLoader} from '../assets/js/FBXLoader.js';
  import {Reflector} from '../static/threejs/examples/jsm/objects/Reflector.js';
  import Stats from '../static/threejs/examples/jsm/libs/stats.module';
  const clock = new THREE.Clock();
  let guiParams = null;
// 模型参数 
let modelInfo = {
  position: {
    x: 75,
    y: 90,
    z: 0
  }
}
export default {
  name: "IndexPage",
  layout: "BaseLayout",
  components: { Swiper, SwiperSlide, guide },
  head() {
    return {
      meta: [
        {
          hid: "mvp-games",
          name: "mvp-games",
          content: "this is mvp-games",
        },
      ],
    };
  },
  mounted() {
    this.init();
    this.animate();
    document
      .getElementById("body-box")
      .addEventListener("scroll", this.handerScrll, true);
  },
  destroyed() {
    document
      .getElementById("body-box")
      .removeEventListener("scroll", this.handerScrll, true);
  },
  methods: {
    toNews(url) {
      window.open(url, "_blank");
    },
    handleOpacity() {
      let _scrollTop = document.getElementById("body-box").scrollTop;
      let _h = _scrollTop - 100;
      this.dealOpacity = 1 - _h * 0.002;
      if (_scrollTop > 1000) {
        this.transitionComPositionToTop = -(_scrollTop - 1000) + "px";
      } else {
        this.transitionComPositionToTop = 0;
      }
    },
    transformImg() {
      let _scrollTop = document.getElementById("body-box").scrollTop;
      this.transformBoxStyle.top = _scrollTop + 95 + "px";
      _scrollTop = _scrollTop - 95;

      if (_scrollTop > 0) {
        this.transformImgStyle.top = _scrollTop * 2.7 + "px";
        this.transformImgStyle.left = -_scrollTop * 5 + "px";
        let _scale = 1 + _scrollTop * 0.01;
        if (_scale > 31) {
          _scale = 31;
        }
        this.transformImgStyle.transform = `scale(${_scale})`;

        if (_scrollTop > 110) {
          this.transformImgStyle.left = this.transformImgStyle.left + 20 + "px";
          // this.transformImgStyle.top = _scrollTop * 2.8 + "px";
          document.getElementById("body-box").overflowX = "hidden";
          document.body.style.overflowX = "hidden";
        }
        if (_scrollTop > 400) {
          this.transformImgStyle.opacity = 1 - (_scrollTop - 400) * 0.005;
          if (_scrollTop > 500) {
            this.transformImgStyle.display = "none";
          } else {
            this.transformImgStyle.display = "block";
          }
        } else {
          this.transformImgStyle.opacity = 1;
        }

        // let _deg = 360 * (_scrollTop / 3200) - 15;
        // this.transformBoxStyle.transform = `rotateY(${_deg}deg)`;

        // if (_scrollTop < 30) {
        //   this.transformImgStyle.left = -_scrollTop * 26 + "px";
        // }
        //
        // if (_scale > 31) {
        //   _scale = 31;
        // }
        // this.transformImgStyle.top = _scrollTop * 13.5 + "px";
      } else {
        this.transformImgStyle.transform = `scale(1)`;
        this.transformImgStyle.top = 0;
        this.transformImgStyle.right = 0;
        this.transformImgStyle.left = "-1px";
      }
    },
    handerScrll() {
      // this.handleOpacity();
      // -45 /700x + 45 = y
      // this.transformImg();
      this.bodyScrllTop = document.getElementById("body-box").scrollTop;
      console.log(this.bodyScrllTop,this.camera.fov);
      if(this.bodyScrllTop <= this.topFov) {
          this.camera.fov = 45 - (45 / 1200) * this.bodyScrllTop
          this.camera.updateProjectionMatrix();
          this.renderer.render(this.scene, this.camera);
      }
  

      // if (this.bodyScrllTop > 1450 && this.istranformopcity) {
      //   this.istitle1 = true;
      //   this.tranformopcity1 = true;
      //   setTimeout(() => {
      //     this.tranformopcity2 = true;
      //   }, 500);
      //   setTimeout(() => {
      //     this.tranformopcity3 = true;
      //   }, 1000);
      //   this.istranformopcity = false;
      // } else if (this.bodyScrllTop > 2179 && this.istranformopcity2) {
      //   this.istranformopcity2 = false;
      //   this.tranformopcity4 = true;
      //   setTimeout(() => {
      //     this.tranformopcity6 = true;
      //   }, 1000);

      //   setTimeout(() => {
      //     this.tranformopcity5 = true;
      //   }, 500);
      // } else if (this.bodyScrllTop > 3100 && this.istranformopcity3) {
      //   this.istranformopcity3 = false;
      //   this.tranformopcity7 = true;
      //   setTimeout(() => {
      //     this.tranformopcity9 = true;
      //     this.tranformopcitydiv4 = 1;
      //     this.topdiv5Top.transform = "translate(0px, -100px)";
      //     this.topdiv5Top.transition = "transform 2s linear 0s";
      //   }, 1000);
      //   setTimeout(() => {
      //     this.tranformopcitydiv4 = 2;
      //   }, 2000);
      //   setTimeout(() => {
      //     this.tranformopcitydiv4 = 3;
      //   }, 3000);
      //   setTimeout(() => {
      //     this.tranformopcity8 = true;
      //   }, 500);
      // } else if (this.bodyScrllTop > 3900 && this.istranformopcity4) {
      //   this.istranformopcity4 = false;
      //   this.tranformopcity10 = true;
      //   setTimeout(() => {
      //     this.tranformopcity12 = true;
      //     this.tranformopcitydiv5 = 1;
      //     this.topdiv6Top.transform = "translate(0px, -100px)";
      //     this.topdiv6Top.transition = "transform 2s linear 0s";
      //   }, 1000);
      //   setTimeout(() => {
      //     this.tranformopcitydiv5 = 2;
      //   }, 2000);
      //   setTimeout(() => {
      //     this.tranformopcitydiv5 = 3;
      //   }, 3000);
      //   setTimeout(() => {
      //     this.tranformopcity11 = true;
      //   }, 500);
      // }
      // if (this.bodyScrllTop < 5) {
      //   this.istranformopcity = true;
      //   this.istranformopcity2 = true;
      //   this.istranformopcity3 = true;
      //   this.istranformopcity4 = true;
      //   this.tranformopcity1 = false;
      //   this.tranformopcity2 = false;
      //   this.tranformopcity3 = false;
      //   this.tranformopcity4 = false;
      //   this.tranformopcity5 = false;
      //   this.tranformopcity6 = false;
      //   this.tranformopcity7 = false;
      //   this.istitle1 = false;
      //   this.tranformopcity8 = false;
      //   this.tranformopcity9 = false;
      //   this.tranformopcity10 = false;
      //   this.tranformopcity11 = false;
      //   this.tranformopcity12 = false;
      // }
      // if (this.bodyScrllTop > 1470) {
      //   this.tranformopcity1 = true;
      //   this.tranformopcity2 = true;
      //   this.tranformopcity3 = true;
      //   this.istitle1 = true;
      //   this.tranformopcity = 1;
      //   this.tranformopcityTop.transform = "translate(0px, -50px)";
      //   this.tranformopcityTop.transition = "transform 1s linear 0s";
      // }
      // if (this.bodyScrllTop > 1510) {
      //   this.tranformopcity = 2;
      //   this.tranformopcityTop.transform = "translate(0px, -100px)";
      //   this.tranformopcityTop.transition = "transform 1s linear 0s";
      // }
      // if (this.bodyScrllTop > 1550) {
      //   this.tranformopcity = 3;
      //   this.tranformopcityTop.transform = "translate(0px, -150px)";
      //   this.tranformopcityTop.transition = "transform 1s linear 0s";
      // }
      // if (this.isTop1 && this.bodyScrllTop > 1570) {
      //   this.tranformopcity1 = false;
      //   this.tranformopcity2 = false;
      //   this.tranformopcity3 = false;
      //   this.istitle1 = false;
      //   this.tranformopcityTop.transform = "translate(0px, -650px)";
      //   this.tranformopcityTop.transition = "transform 2s linear 0s";
      //   setTimeout(() => {
      //     this.isTop1 = false;
      //     document.getElementById("body-box").scrollTo({
      //       top: 2180,
      //     });
      //   }, 2000);
      // }

      // if (this.bodyScrllTop > 2300) {
      //   this.tranformopcity4 = true;
      //   this.tranformopcity5 = true;
      //   this.istitle1 = true;
      //   this.tranformopcity6 = true;
      //   this.tranformopcitydiv3 = 1;
      //   this.topdiv4Top.transform = "translate(0px, -50px)";
      //   this.topdiv4Top.transition = "transform 1s linear 0s";
      // }
      // if (this.bodyScrllTop > 2330) {
      //   this.tranformopcitydiv3 = 2;
      //   this.topdiv4Top.transform = "translate(0px, -100px)";
      //   this.topdiv4Top.transition = "transform 1s linear 0s";
      // }
      // if (this.bodyScrllTop > 2370) {
      //   this.tranformopcitydiv3 = 3;
      //   this.topdiv4Top.transform = "translate(0px, -150px)";
      //   this.topdiv4Top.transition = "transform 1s linear 0s";
      // }
      // if (this.isTop2 && this.bodyScrllTop > 2460) {
      //   this.topdiv4Top.transform = "translate(0px, -650px)";
      //   this.topdiv4Top.transition = "transform 2s linear 0s";
      //   this.tranformopcity4 = false;
      //   this.tranformopcity5 = false;
      //   this.tranformopcity6 = false;
      //   setTimeout(() => {
      //     this.isTop2 = false;
      //     document.getElementById("body-box").scrollTo({
      //       top: 3405,
      //     });
      //   }, 2000);
      // }
      //  if(this.bodyScrllTop > 1911){
      //    this.isTop1 = false;
      //  }
      // else if (this.bodyScrllTop < 130) {
      //   this.scaleImg.transformOrigin = `85%`;
      //   this.scaleImg.transform = `scale(${this.bodyScrllTop / 100 + 1.2})`;
      //   this.scaleImg.top = `${this.bodyScrllTop * 3.2}`;
      //   this.isScrlly = true;
      // } else if (this.bodyScrllTop < 250) {
      //   this.scaleImg.transformOrigin = `80%`;
      //   this.scaleImg.transform = `scale(${this.bodyScrllTop / 100 + 1.2})`;
      //   this.scaleImg.top = `${this.bodyScrllTop * 2.5}`;
      //   this.isScrlly = true;
      // } else if (this.bodyScrllTop > 250 && this.isScrlly) {
      //   this.scaleImg.transform = `scale(1) rotateY(-360deg)`;
      //   this.scaleImg.top = "0px";
      //   this.scaleImg.right = "0px";
      //   document
      //     .getElementById("body-box")
      //     .scrollTo({ top: 750, left: 0, behavior: "auto" });
      //   this.isScrlly = false;
      // }
    },
    showimage(index) {
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;
      this.hover5 = false;
      if (index === 1) {
        this.hover1 = true;
      } else if (index === 2) {
        this.hover2 = true;
      } else if (index === 3) {
        this.hover3 = true;
      } else if (index === 4) {
        this.hover4 = true;
      } else if (index === 5) {
        this.hover5 = true;
      }
    },
    notimage() {
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;
      this.hover5 = false;
    },
    init() {
      if (process.client) {
        this.dat = require('dat.gui');
      }
    //GUI
        guiParams = new function() {
          this.rotationSpeed = 0.02;
          this.positionX = modelInfo.position.x;
          this.positionY = modelInfo.position.y;
          this.positionZ = modelInfo.position.z;
        }
        // const dat = require('dat.gui');
        const container = document.getElementById('three-container');
        document.addEventListener('mousemove',this.onMouseover)
        this.camera = new THREE.PerspectiveCamera(45, container.innerWidth / container.innerHeight, 0.5, 500);
        this.camera.position.set(0, 150, 300);
        this.scene = new THREE.Scene();
        // this.scene.add(new THREE.AxesHelper(500))
        this.scene.position.set(guiParams.positionX, guiParams.positionY, guiParams.positionZ);
        const blueLight = new THREE.PointLight(0x7f7fff, 0.25, 1000);
        blueLight.position.set(0, 50, 550);
        this.scene.add(blueLight);
        const dirLight = new THREE.DirectionalLight(0xffffff);
        dirLight.position.set(20, 200, 100);
        dirLight.castShadow = true;
        dirLight.shadow.camera.top = 180;
        dirLight.shadow.camera.bottom = -100;
        dirLight.shadow.camera.left = -120;
        dirLight.shadow.camera.right = 120;
        this.scene.add(dirLight);

        // 右上角
        const gui = new this.dat.GUI();
        gui.add(guiParams, 'positionX', 0, 500);
        gui.add(guiParams, 'positionY', 0, 500);
        gui.add(guiParams, 'positionZ', 0, 500);


        //创建圆形水平镜面，用于将胶囊体、甜圈圈、多面体小球映射到地面上   底部投影
        // let geometry = new THREE.CircleGeometry(130, 130);
        // let groundMirror = new Reflector(geometry, {
        //   clipBias: 0.003,
        //   textureWidth: window.innerWidth * window.devicePixelRatio,
        //   textureHeight: window.innerHeight * window.devicePixelRatio,
        //   color: 0x777777
        // });
        // groundMirror.position.y = -29;
        // groundMirror.rotateX(-Math.PI / 2);
        // this.scene.add(groundMirror);
       
        let that = this
        // model
        this.pivot5 = new THREE.Object3D();
        const loader = new FBXLoader();
        loader.load('/home.fbx', function (obj) {
          // console.log(obj.children);
          
          // obj.children[2].children[0].material[0].color = new THREE.Color("#9932CC")
           obj.scale.set(that.scale, that.scale, that.scale); //放大obj组对象
                // obj.rotateY(-(90 * 3.14) / 90);
                obj.translateY(-20);
                obj.translateX(-160);
                obj.translateZ(150);
                // obj.rotateY(that.rotate.y * (3.14 / 180));
                obj.rotateX(0 * (3.14 / 180));
                // obj.rotateZ(2 * (3.14 / 180));
                that.scene.add(obj);
                // that.pivot5.add(obj);
        });

        this.renderer = new THREE.WebGLRenderer({antialias: true,alpha: true});
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        container.appendChild(this.renderer.domElement);

        // const controls = new OrbitControls(this.camera, this.renderer.domElement);
        // controls.target.set(0, 100, 0);
        // controls.update();

        window.addEventListener('resize', this.onWindowResize());

        // 左上角 stats
        this.stats = new Stats();
        container.appendChild(this.stats.dom);

      },
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
      },
      animate() {
        requestAnimationFrame(this.animate);
        const delta = clock.getDelta();
        if (this.mixer) this.mixer.update(delta);
        this.scene.position.set(guiParams.positionX, guiParams.positionY, guiParams.positionZ);

        this.renderer.render(this.scene, this.camera);
        this.stats.update();
      },
      onMouseover(event){
        this.scene.rotation.y = (event.clientX - 600) / 5000;
        this.renderer.render(this.scene, this.camera);
      },
  },
  data() {
    return {
      dat: null,
      rotationSpeed: 0,
      topFov: 1200,
      pivot5: null,
      pivot6: null,
      planeGeometry: null,
      font1: {},
      istitle1: false,
      isTop1: true,
      isTop2: true,
      tranformopcityTop: {},
      topdiv4Top: {},
      topdiv5Top: {},
      topdiv6Top: {},
      istranformopcity: true,
      istranformopcity2: true,
      istranformopcity3: true,
      istranformopcity4: true,
      tranformopcity: 0,
      isScrlly: false,
      tranformopcity1: false,
      tranformopcity2: false,
      tranformopcity3: false,
      tranformopcity4: false,
      tranformopcity5: false,
      tranformopcity6: false,
      tranformopcity7: false,
      tranformopcity8: false,
      tranformopcity9: false,
      tranformopcity10: false,
      tranformopcity11: false,
      tranformopcity12: false,
      tranformopcitydiv3: 0,
      tranformopcitydiv4: 0,
      tranformopcitydiv5: 0,
      scaleImg: {
        transform: "scale(1)",
      },
      bodyScrllTop: null,
      // 相机
      camera: {
        fov: 45,
      },
      // 场景
      scene: null,
      // 渲染器对象
      renderer: null,
      Stats: null,
      // 材质对象
      mesh: null,
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      controls: null,
      topdiv2: true,
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
      hover5: false,
      bacImage: "",
      swiperOption: {
        slidesPerView: 3,
        // spaceBetween: 31,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      title: "Home",
      gamePicList: [
        {
          img: require("../assets/indedbanner/1.jpg"),
          title: "NFT Leasing and Play to Earn",
          url: "https://medium.com/@multiverseplay/nft-leasing-and-play-to-earn-fef38a8839d",
        },
        {
          img: require("../assets/indedbanner/2.jpg"),
          title: "Industry perspective of Play 2 Earn and Scholarships",
          url: "https://medium.com/@multiverseplay/industry-perspective-of-play-2-earn-and-scholarships-364b700d861f",
        },
        {
          img: require("../assets/indedbanner/3.jpg"),
          title: "PARTNERING WITH MULTIVERSE PLAY",
          url: "https://medium.com/@multiverseplay/partnering-with-multiverse-play-725ef9ce5c4b",
        },
        {
          img: require("../assets/indedbanner/4.jpg"),
          title: "Multiverse Play: GameFi Reimagined",
          url: "https://medium.com/@multiverseplay/multiverse-play-gamefi-reimagined-43902b85da26",
        },
        {
          img: require("../assets/indedbanner/5.jpg"),
          title: "Multiverse Play — Beyond Guild",
          url: "https://medium.com/@multiverseplay/multiverse-play-beyond-guild-9e25745f2df2",
        },
      ],
      dealOpacity: 1,
      transitionComPosition: "",
      transitionComPositionToTop: 0,
      transformImgStyle: {
        transformOrigin: "50%, 100%",
        position: "relative",
        transform: "scale(1)",
      },
      transformBoxStyle: {
        position: "absolute",
        transformOrigin: "300% 0",
        top: "95px",
        right: 0,
        transform: "rotateY(-15deg)",
      },
      rotate: {
				x: 0,
				y: 0,
				z: 0
      },
      scale: 0.25,
      translateY: 1,
    };
  },
};
</script>
<style lang="less">
.swiper-button-prev:after {
  display: none;
}

.swiper-button-next:after {
  display: none;
}

.swiper-button-prev {
  width: 35px;
  height: 35px;
  background-image: url("~/assets/swiperleft.png");
  background-size: cover;
  bottom: 15px;
  position: absolute;
  left: 0px;
  top: 150px;
}

.swiper-button-disabled {
  opacity: 0.5;
}

.swiper-button-next {
  width: 35px;
  height: 35px;
  background-image: url("~/assets/swiperright.png");
  background-size: cover;
  position: absolute;
  right: 0px;
  top: 150px;
}

.swipertext {
  color: white;
  font-size: 14px;
  font-family: "Poppins-Medium";
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  margin-top: 10px;
  color: #ffffff;
}

.gameswipe {
  position: relative;
  height: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.swiper-content {
  width: 1030px;
  height: 100%;
  position: relative;
  overflow: hidden;
  z-index: 3;

  .show-swiper {
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    .swiper-wrapper {
      display: flex;
      align-items: center;
    }
    .swiper-slide {
      height: 200px;
      // transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      .swiper-item {
        margin-left: 40px;
        width: 250px;
        height: 149px;
        img {
          border-radius: 7px;
          object-fit: cover;
          width: 270px;
          height: 149px;
        }
      }
    }
  }
}
</style>
<style lang="less" scoped>
  #three-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -999;
  }
.title {
  position: relative;
  max-width: 1200px;
  min-width: 960px;
  font-size: 22px;
  height: 27px;
  letter-spacing: 1px;
  padding-left: 25px;
  font-family: "Poppins-Medium";
  font-weight: 500;
  color: #ffffff;
  .icon {
    position: absolute;
    left: 0px;
    top: 8px;
    width: 15px;
  }
}

// @media screen and (max-width: 1440px) {
//   .index-home {
//     position: relative;
//     z-index: 2;
//     max-width: 1200px;
//     min-width: 960px;
//     margin: auto;
//   }
// }
// @media screen and (min-width: 1441px) {
.index-home {
  position: relative;
  z-index: 2;
  width: 100%;
  .transitionCom {
    position: absolute;
    top: 35px;
    left: 50%;
    transform: translateX(-50%);
  }
  .transform-banner {
    position: fixed;
  }
}

.index-content {
  max-width: 1200px;
  min-width: 960px;
  margin: auto;
  // width: 100%;
  display: flex;
  // justify-content: center;
  flex-wrap: wrap;
  .btmcontent {
    max-width: 1200px;
    min-width: 960px;
    background-image: url("~@/assets/bottomcard.webp");
    background-size: cover;
    height: 210px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
    .btmtext {
      margin-left: 70px;
      height: 105px;
      font-size: 44px;
      font-family: "Poppins-Bold";
      font-weight: bold;
      color: #ffffff;
      line-height: 53px;
    }
  }

  .Fade-enter,
  .Fade-leave-to {
    opacity: 0;
  }
  .Fade-enter-to,
  .Fade-leave {
    opacity: 1;
  }

  .Fade-enter-active,
  .Fade-leave-active {
    transition: all 3s;
  }


  .Fade1-enter,
  .Fade1-leave-to {
    transform: translateY(50px);
    opacity: 0;
  }
  .Fade1-enter-to,
  .Fade1-leave {
    opacity: 1;
    transform: translate(0px, 0px);
  }

  .Fade1-enter-active,
  .Fade1-leave-active {
    transition: all 2s;
  }
  .Fade2-enter,
  .Fade2-leave-to {
    opacity: 0;
    transform: scale(0.2) rotateY(90deg);
    // transform: scale(0.4) rotate(360deg);
    // transform:rotate(360deg);
    // transform:rotate(360deg)
  }
  .Fade2-enter-to,
  .Fade2-leave {
    opacity: 1;
    transform: scale(1) rotateY(360deg);
  }

  .Fade2-enter-active,
  .Fade2-leave-active {
    transition: all 1s;
  }
  .topdiv5 {
    width: 100%;
    position: relative;
    height: 788px;
    // margin-top: 50px;
    .imgpng {
      width: 119px;
      height: 119px;
      position: absolute;
      z-index: -1;
      right: 20px;
      top: 350px;
    }
    .imgpng2 {
      width: 223px;
      height: 202px;
      position: absolute;
      z-index: -1;
      right: -30px;
      top: 405px;
    }
    .imgbanner {
      width: 660px;
      height: 488px;
      position: absolute;
      z-index: -1;
      right: 0px;
      top: 500px;
    }
    .lighttext3 {
      width: 100%;
      // height: 252px;
      font-size: 65px;
      font-family: "Poppins-Bold";
      font-weight: bold;
      color: #ffffff;
      line-height: 78px;
      letter-spacing: 2px;
    }
    .lightdesc3 {
      margin-top: 70px;
      // margin-left: 14%;
      width: 948px;
      // height: 162px;
      font-size: 29px;
      font-family: "Poppins-Bold";
      font-weight: bold;
      color: #ffffff;
      line-height: 39px;
      p {
        opacity: 0.5;
      }
    }
  }

  .topdiv3 {
    width: 100%;
    position: relative;
    height: 788px;
    .divimg {
      position: absolute;
      top: 100px;
      right: 70px;
    }
    .title1 {
      position: absolute;
      top: 0;
      font-size: 22px;
      height: 27px;
      letter-spacing: 1px;
      font-family: "Poppins-Medium";
      font-weight: 500;
      color: #ffffff;
    }
    .imgpng {
      width: 119px;
      height: 140px;
      position: absolute;
      z-index: -1;
      right: 53px;
      top: 172px;
    }
    .imgpng2 {
      width: 226px;
      height: 208px;
      position: absolute;
      z-index: -1;
      right: 0px;
      top: 255px;
    }
    .imgbanner {
      width: 660px;
      height: 488px;
      position: absolute;
      z-index: -1;
      right: 0px;
      top: 400px;
    }
    .lighttext1 {
      padding-top: 150px;
      // margin-left: 14%;
      width: 980px;
      // height: 252px;
      font-size: 65px;
      font-family: "Poppins-Bold";
      font-weight: bold;
      color: #ffffff;
      line-height: 78px;
      letter-spacing: 2px;
    }
    .lightdesc1 {
      margin-top: 50px;
      // margin-left: 14%;
      width: 848px;
      // height: 162px;
      font-size: 29px;
      font-family: "Poppins-Bold";
      font-weight: bold;
      color: #ffffff;
      line-height: 39px;
      p {
        height: 50px;
        opacity: 0.5;
      }
    }
  }
  .topdiv4 {
    margin-top: 50px;
    width: 100%;
    position: relative;
    // background-image: url("~@/assets/lightlogo2.webp");
    // background-size: cover;
    height: 788px;
    .title1 {
      position: absolute;
      top: 0;
      font-size: 22px;
      height: 27px;
      letter-spacing: 1px;
      font-family: "Poppins-Medium";
      font-weight: 500;
      color: #ffffff;
    }
    .imgpng2 {
      width: 224px;
      height: 238px;
      position: absolute;
      z-index: -1;
      left: 0px;
      top: 455px;
    }
    .imgpng {
      width: 208px;
      height: 246px;
      position: absolute;
      z-index: 2;
      left: 5px;
      top: 330px;
    }

    .imgbanner {
      width: 660px;
      height: 488px;
      position: absolute;
      z-index: -1;
      left: 0px;
      top: 200px;
    }
    .lighttext2 {
      margin-top: 200px;
      float: right;
      // margin-right: 10%;
      width: 769px;
      // height: 252px;
      text-align: right;
      font-size: 65px;
      font-family: "Poppins-Bold";
      font-weight: bold;
      color: #ffffff;
      line-height: 78px;
      letter-spacing: 2px;
    }
    .lightdesc2 {
      float: right;
      margin-top: 70px;
      text-align: right;
      // margin-right: 10%;
      width: 848px;
      // height: 162px;
      font-size: 29px;
      font-family: "Poppins-Bold";
      font-weight: bold;
      color: #ffffff;
      line-height: 39px;
      p {
        opacity: 0.5;
      }
    }
  }
  .topdiv6 {
    position: relative;
    // margin-top: 50px;
    width: 100%;
    height: 788px;
    margin-bottom: 0px;
    .imgpng2 {
      width: 241px;
      height: 217px;
      position: absolute;
      z-index: 3;
      left: -15px;
      top: 475px;
    }
    .imgpng {
      width: 124px;
      z-index: 4;
      height: 123px;
      position: absolute;
      left: 70px;
      top: 330px;
    }
    .imgbanner {
      width: 715px;
      height: 431px;
      position: absolute;
      z-index: -1;
      left: 0px;
      top: 250px;
    }
    .lighttext4 {
      // margin-top: 197px;
      float: right;
      // margin-right: 10%;
      width: 969px;
      // height: 252px;
      text-align: right;
      font-size: 65px;
      font-family: "Poppins-Bold";
      font-weight: bold;
      color: #ffffff;
      line-height: 78px;
      letter-spacing: 2px;
    }
    .lightdesc4 {
      float: right;
      margin-top: 70px;
      text-align: right;
      // margin-right: 10%;
      width: 948px;
      // height: 162px;
      font-size: 29px;
      font-family: "Poppins-Bold";
      font-weight: bold;
      color: #ffffff;
      line-height: 39px;
      p {
        opacity: 0.5;
      }
    }
  }
  .topdiv {
    // width: 85%;
    // flex-shrink: 0;
    max-width: 1200px;
    min-width: 960px;
    // background-image: url("~@/assets/test1.webp");
    // background-size: 100% 100%;
    height: 801px;
    position: relative;

    .index-banner {
      position: absolute;
      z-index: -1;
      top: 80px;
      // width: 100%;
      // height: 100%;
      right: 0 !important;
      transform: will-change;
    }
    .text {
      // width: 948px;
      margin-top: 20vh;
      // margin-left: 14%;
      flex-shrink: 0;
      width: 1200px;
      // padding-left: 56px;
      // min-width: 960px;
      font-size: 71px;
      font-size: 50px;
      font-family: "Audiowide";
      font-weight: 400;
      color: #ffffff;
      letter-spacing: 1px;
    }

    .describe {
      margin-top: 120px;
      // margin-left: 14%;
      width: 747px;
      display: flex;
      align-items: center;
      font-size: 16px;
      font-family: "Poppins-Regular";
      font-weight: 400;
      color: #ffffff;
      line-height: 26px;

      .describeadd {
        margin-right: 10px;
        width: 57px;
        height: 187px;
        font-size: 62px;
        font-family: "Poppins-Bold";
        font-weight: bold;
        color: #ffffff;
        line-height: 191px;
      }
    }
    .topimg {
      width: 100%;
    }
  }
}

@media screen and(min-width: 1600px) {
.index-content .topdiv .text {
      // width: 948px;
      margin-top: 38vh;
} 
}

// }
</style>
