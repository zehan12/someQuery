async onChange(e, index) {
    if (
      ["id", "name", "price"].includes(
        e.target.name
      )
    ) {
      let cats = [...this.state.items];

      cats[index][e.target.name] = e.target.value;
      await this.setState({
        cats
      });
    } else {
      await this.setState({ [e.target.name]: e.target.value });
    }
    console.log(this.props.vall);
  }
