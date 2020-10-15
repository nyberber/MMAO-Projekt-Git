const router = require("express").Router();
const fs = require("fs");

// @desc    Get data
// @route   GET /api/data
// @access  Public
router.get("/", async (req, res) => {
    try {
        // Add url to aws s3 json file
        fs.readFile("name.json", "utf8", async (err, response) => {
            if (err) {
                console.log(err);
                return;
            }
            const data = JSON.parse(response);
            res.status(200).json({ success: true, data });
        });
    } catch (err) {
        res.status(500).json({ success: false, error: "Server Error" });
    }
});

module.exports = router;
