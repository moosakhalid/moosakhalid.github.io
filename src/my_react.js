'use strict';
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

Banner.defaultProps = { banner: 'Site under construction: moosakhalid.com' };

Banner.propTypes = { banner: PropTypes.string.isRequired };

class Banner extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
      <div>
      <h1>{props.banner}</h1>
      </div>
      );
   }
};

ReactDOM.render(<Banner />, document.getElementById('container');
