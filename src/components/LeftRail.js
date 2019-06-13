import React from 'react';
import { connect } from 'react-redux';
import { getCompanies } from '../adapter/companyAdapter'
import CommunityCard from './CommunityCard';
import speechBubbleIcon from '../images/speech-bubble.png';
import hashtagBubbleIcon from '../images/hashtag-bubble.png';

class LeftRail extends React.Component {
  componentDidMount() {
    this.props.getCompanies();
  }

  render() {
    const { companies } = this.props

    return ( companies.length > 0 &&
      <div className="left-rail">
        <CommunityCard communities={[companies[0], companies[1], companies[2]]}/>
        <CommunityCard communities={[companies[3], companies[4], companies[5]]}/>

        <div className="summary-box-2">
          <img src={speechBubbleIcon}/>

          <div className="summary-box-text">
            <h3>No groups yet</h3>
            <p>Once you join groups, you will see them here</p>
          </div>
        </div>

        <div className="summary-box-3">
          <img src={hashtagBubbleIcon}/>

          <div className="summary-box-text">
            <h3>No hashtags yet</h3>
            <p>Once you follow hashtags, you will see them here</p>
          </div>
        </div>

        <div className="summary-contact-box">
          <h3>Your contact import is ready</h3>
          <h4>Connect with your contacts and never lose touch</h4>

          <div className="cont-btn">
            <span>Continue</span>
          </div>

          <span>More options</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ companyState }) => {
  return companyState;
}

export default connect(mapStateToProps, { getCompanies })(LeftRail);
