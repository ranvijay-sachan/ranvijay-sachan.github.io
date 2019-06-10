import React from "react";
import ProjectCard from "./ProjectCard/Card";
import "./Portfolio.css";

const portfolio = props => {
  return (
    <div className="port__outer">
      <p className="headings">
        My projects<span className="blink">_</span>
      </p>
      <div className="cards__outer">
        <div className="cards__inner">
          <ProjectCard
            title=" AVERT"
            description="The AVERT (Altran’s Automated Vulnerability Ecosystem Resistance Tactics) framework is an AI/ML based automated orchestration engine to predict zero day vulnerabilities and accelerate DevSecOps processes.It's allow product and network security teams to help build and manage secure product releases and networks."
            link="https://www.irmsecurity.com/cyber-solutions/avert/"
          />
          <ProjectCard
            title="Design Hub"
            description="designHUB from ClioSoft provides a customizable ecosystem for collaborative development with built-in support for IP creation, management and reuse. designHUB has a rich set of reports and analytics to provide an overview of the design progress and IP usage. It is built for high performance, customizability, security and robustness to meet the demanding requirements of SoC design teams."
            link="https://www.cliosoft.com/www2/products/ip_reuse_ecosystem/"
          />
          <ProjectCard
            title="Credr"
            description="CredR/moto-scan is an online marketplace for listing and purchasing certified, pre-owned vehicles at the fairest. Buy Inspected Used Bikes in Mumbai with warranty & discount. 100% verified second hand bikes excellent condition available at best price offered."
            link="https://www.credr.com/"
          />
          <ProjectCard
            title="Cartwire"
            description="By using Cartwire, site owners can drive online sales, access detailed reports and analytics, and monitor real-time information about the retail availability of their products."
            link="https://www.cartwire.co/"
          />
          <ProjectCard
            title="Salesify"
            description="Salasify manage all the company and companies keyword data. Salesify provides B2B company contacts data. In this projects i have parsed multiple format(csv, xls, xml, json) data using python libraries."
            link="https://www.salesify.com/"
          />

          <ProjectCard
            title="Adobe TV"
            description="Adobe is the global leader in digital marketing and digital media solutions. Our tools and services enable our customers to create groundbreaking digital content, deploy it across media and devices, measure and optimize it over time, and achieve greater business success. We help our customers make, manage, measure and monetize their digital content across every channel and screen. "
            link="https://www.stpl.biz/more_info?id=84871"
          />
        </div>
      </div>
    </div>
  );
};

export default portfolio;
