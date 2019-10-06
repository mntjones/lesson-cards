import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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
            <Tab>The 4 I's</Tab>
            <Tab>OWL</Tab>
            <Tab>ROCK</Tab>
            <Tab>The 4 S's</Tab>
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
            	<li>L?</li>
            </ul>
          </TabPanel>
          <TabPanel>
            <ul>
              <li>R</li>
            	<li>O</li>
            	<li>Cue</li>
            	<li>Keep it Fun</li>
            </ul>
          </TabPanel>
          <TabPanel>
            <ul>
              <li>Slow it down</li>
            	<li>S </li>
            	<li>S</li>
            	<li>S</li>
            </ul>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default TabbedLesson;