'use strict';

import PropTypes from 'prop-types';

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

Banner.defaultProps = { banner: 'Site under construction: moosakhalid.com' };

Banner.propTypes = { banner: PropTypes.string.isRequired };



ReactDOM.render(<Banner />, document.getElementById('container'));
