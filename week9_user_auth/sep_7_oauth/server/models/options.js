module.exports = {
	timestamps: true,
	toJSON: {
		transform( doc, ret ) {
			ret.id = ret._id;
			delete ret._id;
			delete ret.__v;
			return ret;
		}
	}
};