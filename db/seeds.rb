# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Note.destroy_all

[
  "Rails Models are Ruby classes intended to represent real-world things.",
  "Instance variables in controllers hold data for the views.",
  "Rails is best for database-backed web applications.",
  "Pairing accelerates learning.",
  "In Ruby, everything is an object."
].each do |sentence|
  Note.create content: sentence
end
