const Task = require("../model/Task");

const taskController = {};

taskController.createTask = async (req, res) => {
  try {
    const { task, isComplete } = req.body;
    const newTask = new Task({ task, isComplete });
    await newTask.save();
    res.status(200).json({ status: "ok", data: newTask });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
};

taskController.getTask = async (req, res) => {
  try {
    const taskList = await Task.find({}).select("-__v");
    res.status(200).json({ status: "ok", data: taskList });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
};

taskController.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      throw new Error("App can not find the task");
    }
    if (findId) {
      const taskList = await Task.updateOne({ task, isComplete }).select(
        "-__v"
      );
      res.status(200).json({ status: "ok", data: taskList });
    }
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
};

module.exports = taskController;
