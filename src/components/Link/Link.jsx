
import PropTypes from 'prop-types';

const Link  = ({route}) => {
  return (
    <div>
      {
        <li className="mr-10 hover:bg-teal-500 p-2 md:p-0" key={route.id}><a href={route.path}>{route.name}</a></li>
      }
    </div>
  );
};

Link.propTypes = {
  route: PropTypes.object
}

export default Link;