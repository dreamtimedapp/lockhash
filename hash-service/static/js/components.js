class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editor: null
    };
  }

  onChange = (event) => {
    const { editor } = this.state;

    this.props.onChange(editor.getMarkdown(), editor.getHtml());
  }

  componentDidMount() {
    let height = '400px';

    if (this.props.height) {
      height = this.props.height;
    }

    let editor = new tui.Editor({
      el: document.querySelector('#editSection'),
      initialEditType: 'markdown',
      initialValue: this.props.markdown,
      previewStyle: 'vertical',
      height: height,
      language: 'zh_CN',
      hooks: {
        addImageBlobHook: function(file, callback, source) {
          let formData = new FormData();
          formData.append('image', file);
          postForm("/api/upload/image", formData).then((data) => {
            if (data.status) {
              callback(data.image_url, '');
            }
          });
          return false;
        }
      },
      events: {
        change: this.onChange
      }
    });

    this.setState({editor});
  }

  render() {
    return <div id="editSection"></div>;
  }
}

class Toolbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'canCollect': this.props.canCollect
    }
  }

  deleteTopic = () => {
    let { topicId } = this.props;
    if (confirm('确认删除该主题吗？')) {
      delete_('/api/topic/' + topicId).then((data) => {
        if (data.status) {
          window.location.href = '/';
        } else {
          alert(data.message);
        }
      });
    }
  }

  collectTopic = () => {
    get('/api/topic/' + this.props.topicId + '/collect').then((data) => {
      if (data.status) {
        this.setState({canCollect: 'false'});
      } else {
        alter(data.message);
      }
    });
  }

  cancelCollectTopic = () => {
    get('/api/topic/' + this.props.topicId + '/cancel_collect').then((data) => {
      if (data.status) {
        this.setState({canCollect: 'true'});
      } else {
        alter(data.message);
      }
    });
  }

  render() {
    let { canEdit, canDelete } = this.props;
    let { canCollect } = this.state;
    let editButton = null;
    if (canEdit == 'true') {
      editButton = (<p className="control">
        <a className="button is-small" title="编辑" href={'/t/' + this.props.topicId + '/edit'}>
          <span className="icon is-small">
            <i className="fas fa-edit"></i>
          </span>
        </a>
      </p>);
    }

    let deleteButton = null;
    if (canDelete == 'true') {
      deleteButton = (<p className="control">
        <a className="button is-small" title="删除" onClick={this.deleteTopic}>
          <span className="icon is-small">
            <i className="fas fa-times"></i>
          </span>
        </a>
      </p>);
    }

    let collectButton = null;
    if (canCollect == 'true') {
      collectButton = (<p className="control">
        <a className="button is-small" title="收藏" onClick={this.collectTopic}>
          <span className="icon is-small">
            <i className="far fa-star"></i>
          </span>
        </a>
      </p>);
    } else {
      collectButton = (<p className="control">
        <a className="button is-small" title="取消收藏" onClick={this.cancelCollectTopic}>
          <span className="icon is-small">
            <i className="fas fa-star"></i>
          </span>
        </a>
      </p>);
    }

    return (<div className="field has-addons">
      {editButton}
      {deleteButton}
      {collectButton}
    </div>);
  }
}

class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {size, disabled, isSubmiting, isRounded, isFullwidth} = this.props;

    let className = "button is-success";
    if (size) {
      className += ' ' + size;
    }

    if (isRounded) {
      className += ' is-rounded';
    }

    if (isFullwidth) {
      className += ' is-fullwidth';
    }

    let submitButton;

    if (isSubmiting) {
      submitButton = (<button className={className} disabled>
        <span className="icon">
          <i className="fas fa-spinner fa-spin"></i>
        </span>
        <span>正在提交 ...</span>
      </button>);
    } else {
      submitButton = <button
        type="submit"
        className={className}
        disabled={disabled}>
        提&nbsp;&nbsp;&nbsp;&nbsp;交
      </button>;
    }

    return submitButton;
  }
}

class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="notification loading">
      <img src="/static/img/loading.gif?1" />
      <p>正在加载...</p>
    </div>);
  }
}
