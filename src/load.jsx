import React from 'react';
import { PropagateLoader } from 'react-spinners';
import FadeIn from 'react-fade-in';

class Loading extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
	}

	componentDidMount() {
		this.props.shouldScroll()
	}

	render() {
		return(

			<div>
				<FadeIn delay={100} transitionDuration={3000}>
					<div className='sweet-loading, load'>
						<PropagateLoader
							color={'white'}
							loading={this.state.loading}
							size={30}
						/>
					</div>
				</FadeIn>
			</div>

		)
	}

}

export default Loading;
