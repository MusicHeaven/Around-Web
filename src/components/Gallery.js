import React from 'react';
import PropTypes from 'prop-types';
import GridGallery from 'react-grid-gallery';
import '../styles/Gallery.css';

export class Gallery extends React.Component {
    static propTypes = {
        images: PropTypes.arrayOf(
            PropTypes.shape({
                user: PropTypes.string.isRequired,
                src: PropTypes.string.isRequired,
                thumbnail: PropTypes.string.isRequired,
                caption: PropTypes.string.isRequired,
                thumbnailWidth: PropTypes.number.isRequired,
                thumbnailHeight: PropTypes.number.isRequired
            })
        ).isRequired
    }

    render() {
        const images = this.props.images.map((image) => {
            return {
                ...image,
                customOverlay: (
                    <div className={"overlay"}>
                        <div>{`${image.user}: ${image.caption}`}</div>
                    </div>
                ),
            };
        });

        return (
            <div style={wrapperStyle}>
                <GridGallery
                    backdropClosesModal
                    images={images}
                    enableImageSelection={false}/>
            </div>
        );
    }
}

const wrapperStyle = {
    display: "block",
    minHeight: "1px",
    width: "100%",
    border: "1px solid #ddd",
    overflow: "auto"
};
