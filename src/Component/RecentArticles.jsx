import React from 'react'
import SliderComponent from './SliderComponent'
function RecentArticles() {
  return (
     <>
     <div className="mainRECENt Recen">
     <div className="RECENT">
     <p>RECENT ARTICLES</p>
       
        <div className="RECENTaa">
        <a href="">Our Favorite Airdrop Picks – By our Expert Team</a>
        </div>
      <div className="RECENTaa">
      <a href="">Ripple vs SEC: The Legal Battle that Shook the Crypto World</a>

      </div>
      <div className="RECENTaa">
      <a href="">Celebrity Meme Coins: A Concerning Trend in Crypto</a>

      </div>
      <div className="RECENTaa">
      <a href="">Solana Price Retests $150 Mark: Is a Rebound Imminent?</a>

      </div>
      <div className="RECENTaa">
      <a href="">A Beginner Guide to Layer-3 Blockchains</a>

      </div>
       


       <div className="AIRDROPALERT mt-3">
        <p>AIRDROPALERT NEWSLETTER  

</p>

<div className="inputt AIRDROi">
              <input
                type="text"
                placeholder="Email addres"
                className="bine4"/>
              <br />
              <button className=" bine5"> Subscribe</button>

        
              {/* <div
                className="checkbox"
                style={{ display: "flex", alignItems: "center" }}
              >
                <input type="checkbox" style={{ margin: 8 }} />
                <p className="text-white" style={{ margin: 0 }}>
                  I consent to receiving your weekly newsletter and special
                  offers via email.
                </p>
              </div> */}


              <div className="checkbox00 text-white d-flex"  >
                <div className="boxindhbc">
                <input type="checkbox"/>
                </div>
              
               <div className="consent">
               I consent to receiving your weekly newsletter and special
                  offers via email.
               </div>
                 
              </div>
              <div className="inner">
                <p>
                  Powered
                  <a
                    href="https://emailoctopus.com/?utm_source=powered_by_form&amp;utm_medium=user_referral"
                    target="_blank"
                  >
                    EmailOctopus
                  </a>
                </p>
              </div>
            </div>
       </div>

        


       <SliderComponent />
     </div>
     </div>
     
     
     </>
  )
}

export default RecentArticles