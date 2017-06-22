# config valid only for current version of Capistrano
lock "3.8.2"

set :application, "house_party"
set :repo_url, "git@github.com:SanchoRubyroid/HouseParty.git"
set :repository_cache, 'git_cache'
set :deploy_via, :remote_cache

set :rvm_ruby_version, '2.2.4'

set :passenger_restart_with_touch, true
set :passenger_rvm_ruby_version, fetch(:rvm_ruby_version)


# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/var/rails/#{fetch(:application)}"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml", "config/secrets.yml"

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
# set :keep_releases, 5

namespace :deploy do
  task :custom_symlink do
    on roles(:app) do
      info 'Creating symlinks'
      %w{ database secrets }.each do |yaml_name|
        execute "rm #{fetch(:release_path)}/config/#{yaml_name}.yml"
        execute "ln -nfs #{fetch(:deploy_to)}/secure/#{yaml_name}.yml #{fetch(:release_path)}/config/#{yaml_name}.yml"
      end
    end
  end
end

before 'deploy:migrate', 'deploy:custom_symlink'