import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    articles = [
        {
          "source": { "id": "news24", "name": "News24" },
          "author": "Khanyiso Tshwaku",
          "title": "SACA CEO Andrew Breetzke on how the Quinton de Kock fallout could have been avoided",
          "description": "South African Cricketer's Association chief executive officer Andrew Breetzke said Cricket South Africa should have dealt with the taking the knee matter before the tournament instead of raising it on the world stage.",
          "url": "https://www.news24.com/sport/Cricket/Proteas/saca-ceo-andrew-breetzke-on-how-the-quinton-de-kock-fallout-could-have-been-avoided-20211027",
          "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/11731/e9deaec70d9c41bf8b3f9437b9374a3f.jpg",
          "publishedAt": "2021-10-27T16:42:05+00:00",
          "content": "<ul><li>South African Cricketer's Association chief executive officer Andrew Breetzke said Cricket South Africa's board should have dealt with the kneeling controversy last year.</li><li>The CSA boar… [+2689 chars]"
        },
        {
          "source": { "id": "google-news-in", "name": "Google News (India)" },
          "author": "Apoorva Mandhani",
          "title": "Retired SC judge Raveendran, from failing law exam to Lodha panel on cricket & now Pegasus probe",
          "description": "The retired Supreme Court judge has been appointed by the apex court to oversee a three-member technical committee probing the Pegasus snooping allegations.",
          "url": "https://theprint.in/judiciary/retired-sc-judge-raveendran-from-failing-law-exam-to-lodha-panel-on-cricket-now-pegasus-probe/757497/",
          "urlToImage": "https://static.theprint.in/wp-content/uploads/2021/10/justice.jpg",
          "publishedAt": "2021-10-27T11:20:20+00:00",
          "content": "New Delhi: From failing his first-year law exam to now being appointed by the Supreme Court to oversee the committee probing the Pegasus snooping allegations, Justice R.V. Raveendran has come a long … [+5813 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
      ];

  constructor() {
    super();
    console.log("Constructor called");
    this.state = {
        articles : this.articles,
        loading : false
    }
  }

  render() {
    return (
      <div className="container my-2">
        <h2>News Daily - Top Headlines</h2>

        <div className="row my-2">
          <div className="col-md-4">
            <NewsItem
              title="myTitle"
              description="Mydesc"
              imageUrl="https://cdn.24.co.za/files/Cms/General/d/11731/e9deaec70d9c41bf8b3f9437b9374a3f.jpg"
              newsUrl = "TODO"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="myTitle"
              description="Mydesc"
              imageUrl="https://cdn.24.co.za/files/Cms/General/d/11731/e9deaec70d9c41bf8b3f9437b9374a3f.jpg"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="myTitle"
              description="Mydesc"
              imageUrl="https://cdn.24.co.za/files/Cms/General/d/11731/e9deaec70d9c41bf8b3f9437b9374a3f.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
