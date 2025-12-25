import Group from "../models/Group.js";

export const createGroup = async (req, res) => {
    const group = await Group.create(req.body);
    res.json(group);
};

export const getGroups = async (req, res) => {
    const groups = await Group.find().populate("members");
    res.json(groups);
};
