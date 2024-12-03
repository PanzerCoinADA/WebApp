{ pkgs, lib, config, inputs, ... }:
let
  pkgs-unstable = import inputs.nixpkgs-unstable { system = pkgs.stdenv.system; };
in
{
  packages = [ pkgs-unstable.moon ];
  languages =
    {
      javascript = {
        enable = true;
        package = pkgs-unstable.nodejs_20;
        corepack.enable = true;
        pnpm.enable = true;
        pnpm.install.enable = true;
        pnpm.package = pkgs-unstable.pnpm;
      };
    };

  git-hooks.hooks = {
    eslint.enable = true;
    prettier.enable = true;
  };

  git-hooks.hooks.tests = {
    enable = true;
    name = "tests";
    entry = "moon run :test";
    files = "\\.(jsx?|tsx?)$";
    language = "system";
    pass_filenames = false;
  };
}
