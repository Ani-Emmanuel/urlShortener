const UrlModel = require("../model/urlShortener");

module.exports = {
  getAllUrl: async (req, res, next) => {
    try {
      const allurl = await UrlModel.find({});
      res.status(200).json(allurl);
    } catch (error) {
      next(error);
    }
  },
  createShortUrl: async (req, res, next) => {
    try {
      const { fullurl } = req.body;
      // checking if the url is in the database
      const urlExist = await UrlModel.findOne({ fullurl: fullurl });
      if (urlExist) {
        return res.status(304).json({ urlExist });
      }

      // saving the url in the database
      const doc = new UrlModel(req.body);
      const result = await doc.save();
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  },
  getOneUrl: async (req, res, next) => {
    try {
      const { id } = req.params;
      const oneUrl = await UrlModel.findOne({ shorturl: id });
      return res.redirect(oneUrl.fullurl)
      // res.status(200).json(oneUrl);
    } catch (error) {
      next(error);
    }
  }
};
