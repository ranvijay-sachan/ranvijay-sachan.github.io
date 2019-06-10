import React from "react";
import "./Resume.css";

const resume = () => {
  return (
    <div className="resume__outer">
      <p className="headings">
        Resume<span className="blink">_</span>
      </p>

      <div className="resume__list">
        <h3 className="resume__list__title">Experience</h3>

        <div className="resume__list__block">
          <p className="resume__list__block__title">
            Technical Lead at Altran Technology
          </p>
          <p className="resume__list__block__date">Oct 2017 - Present</p>
          <p>
          <ul>
            <li>Participates in the design and development microservice based architecture. </li>  <br />
            <li> Created five microservices(WMS, TPMS, TMS, TIS,UMS) individually and participates on other microservices.</li> <br />
            <li> Working on finding management services.</li> <br />
            <li> Managing 2-3 person team, Code review and jira management
            Working on security tools such as Nessus, sonarqube etc...</li>
        </ul>

          </p>
        </div>

        <div className="resume__list__block">
          <p className="resume__list__block__title">Sr. Software Engineer at Zymr System, Pune</p>
          <p className="resume__list__block__date">August 2016 - Sep-2017</p>
          <p>
              <ul>
                 <li>Participates in the design and development of RESTful API services and clients.</li>
                 <li>Replaced Askbot Functionality with design-Hub forum app.</li>
                 <li>Created Reporting module from scratch</li>
                 <li>Models ER diagram creation, Models, Api creation, Project POC etc...</li>
              </ul>
           </p>
        </div>

        <div className="resume__list__block">
          <p className="resume__list__block__title">
            SDE-1 at Incredible Technologies Pvt. Ltd, Mumbai
          </p>
          <p className="resume__list__block__date">July 2015 - Jul 2016</p>
          <p>
              <ul>
                  <li>Geography, User auth, logs, otp, assets model and api’s creations, Report generation.</li>
                   <li>Offer launch, OnEmi calculator integration.Price matrix system creation for product bulk updating price.</li>
                  <li>Product xml feed creation for Junglee.com.</li>
                  <li>Integration with multiple-back-end technologies including python and rest api’s.(Salesforce integration, zoho integration)</li>
              </ul>
          </p>
        </div>

         <div className="resume__list__block">
          <p className="resume__list__block__title">
            Software Engineer at SRM Techsol. Pvt. Ltd, Lucknow
          </p>
          <p className="resume__list__block__date">Aug 2011 - June 2015</p>
          <p>
              <ul>
                  <li>Integrating multiple python modules with scrapy and django framework</li>
                  <li>Take care live bugs</li>
                  <li>Created spiders for projects to scrap brands and retailers data</li>
                  <li>Multiple mediums data parsing(json, csv, xml, html etc.) and stored in database</li>
                  <li>Created spider for salesify project to scrap data from naukri portals</li>
                  <li>Deployed project on production using scrapyD and twisted</li>
                  <li>Written selenium test cases for adobe-AEM</li>
              </ul>
          </p>
        </div>

      </div>



      <div className="resume__list">
        <h3 className="resume__list__title">Education</h3>
        <div>
          <p className="resume__list__block__title">
            Integral University, Lucknow
          </p>
          <p>Master of computer Application With 84%</p>
        </div>
        <div>
          <p className="resume__list__block__title">
            National Institute of Electronics & Information Technology, Delhi
          </p>
          <p>A level With 60% </p>
        </div>
      </div>
      <div className="resume__skills">
        <h3 className="resume__skills_title">Skills</h3>
        <div className="skills__outer">
          <div className="skills__inner">
            <p className="skills__item">Python</p>
            <p className="skills__item">PEP8</p>
            <p className="skills__item">Panda</p>
            <p className="skills__item">Django/Rest</p>
            <p className="skills__item">Celery</p>
            <p className="skills__item">Pylint</p>
            <p className="skills__item">Unit test cases</p>
            <p className="skills__item">rabbitMQ</p>
            <p className="skills__item">Kubernetes</p>
            <p className="skills__item">NGINX</p>
            <p className="skills__item">Linux</p>
            <p className="skills__item">React.js</p>
            <p className="skills__item">Pycharm</p>
            <p className="skills__item">Web Scraping(Scrapy)</p>
            <p className="skills__item">Sql/noSQL</p>
            <p className="skills__item">HDF5</p>
            <p className="skills__item">Whoosh</p>
            <p className="skills__item">elasticsearch-dsl</p>
            <p className="skills__item">Solar</p>
            <p className="skills__item">AWS/boto/SES</p>
            <p className="skills__item">GIT</p>
            <p className="skills__item">Agile</p>
            <p className="skills__item">Jenkins</p>
            <p className="skills__item">NMAP</p>
            <p className="skills__item">Nessus</p>
            <p className="skills__item">sonarqube</p>
            <p className="skills__item">Vulnerability</p>
            <p className="skills__item">Auth/SocialAuth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
