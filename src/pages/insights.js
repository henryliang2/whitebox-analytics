import React, { useEffect, useState } from "react";
import Navigation from '../components/Navigation';
import InsightCard from '../components/InsightCard';
import SEO from "../components/seo";
import '../styles/app.css';
import '../styles/insights.css';

const InsightsPage = () => {

  const [insights, setInsights] = useState([]);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hhl60492')
    .then(results => results.json())
    .then(data => { 
      console.log(data.items)
      const array = [];
      for(let item of data.items) { // only want first 5 results
        if (array.length <= 4 && item.categories.length) {
          array.push(item)
        }
      }
      setInsights(array) 
    })
  }, [])

  return (
  <div className='layout__container'>

    <SEO title="Insights" />
    <Navigation />

    <div className='layout__header'>Recent Insights from Our Team</div>

    <div className='insightcard__container'>
      {
        insights.map((item, i) => 
          <InsightCard key={i}
            title = { item.title }
            thumbnail = { item.thumbnail }
            pubDate = { item.pubDate }
            author = { item.author }
            link = { item.link }
            content = { item.content }
          />
        )
      }
    </div>

  </div>

  );
  
}

export default InsightsPage;