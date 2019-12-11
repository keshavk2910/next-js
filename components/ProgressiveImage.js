import {Component} from 'react'


class ProgressiveImage extends Component {
    state = {
      currentImage: this.props.preview,
      loading: true,
    }
  
    componentDidMount() {
      this.fetchImage(this.props.image)
    }
  
    // UNSAFE_componentWillReceiveProps(nextProps) {
    //   if (nextProps.image !== this.props.image) {
    //     this.setState({ currentImage: nextProps.preview, loading: true }, () => {
    //       this.fetchImage(nextProps.image)
    //     })
    //   }
    // }
    static getDerivedStateFromProps(nextProps, prevState){
      if (nextProps.image !== prevState.image) {
        return {  currentImage: nextProps.preview, loading: true }, () => {
          this.fetchImage(nextProps.image)
        }
     } else return null;
   };
  

    componentWillUnmount() {
      if (this.loadingImage) {
        this.loadingImage.onload = null
      }
    }
  
    fetchImage = src => {
      const image = new Image()
      image.onload = () => this.setState({ currentImage: this.loadingImage.src, loading: false })
      image.src = src
      this.loadingImage = image
    }
  
    style = loading => {
      return {
        transition: '0.5s filter linear',
        filter: `${loading ? 'blur(50px)' : ''}`,
      }
    }
  
    render() {
      const { currentImage, loading } = this.state
      const { alt } = this.props
      return <React.Fragment>
      <img style={this.style(loading)} src={currentImage} alt={alt} />
      <style jsx global>{`
      img {
        max-width:100%
      }
    `}
      </style>
      </React.Fragment>
    }
  }

export default ProgressiveImage;