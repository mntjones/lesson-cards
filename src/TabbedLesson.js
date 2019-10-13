import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './style/TabbedLesson.css';

class TabbedLesson extends Component {

  constructor() {
    super();
    this.state = { tabIndex: 0 };
  }

  render() {
    return (
      <div>
        <Tabs selectedIndex={this.state.tabIndex} 
        onSelect={tabIndex => this.setState({ tabIndex })}>

          <TabList>
            <Tab>The Four I's</Tab>
            <Tab>OWL</Tab>
            <Tab>ROCK</Tab>
            <Tab>The Four S's</Tab>
          </TabList>

          <TabPanel>
            <ul>
            	<li>Include their Interests</li>
            	<li>Interpret</li>
            	<li>Imitate</li>
            	<li>Interrupt</li>
            </ul>
          </TabPanel>
          <TabPanel>
            <ul>
            	<li>Observe</li>
            	<li>Wait</li>
            	<li>Listen</li>
            </ul>
          </TabPanel>
          <TabPanel>
            <ul>
              <li>Repeat, Repeat, Repeat</li>
            	<li>Offer Opportunities (wait)</li>
            	<li>Cue</li>
            	<li>Keep it Fun</li>
            </ul>
          </TabPanel>
          <TabPanel>
            <ul>
              <li>Say Less</li>
            	<li>Stress key words </li>
            	<li>Slow it down</li>
            	<li>Show</li>
            </ul>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default TabbedLesson;