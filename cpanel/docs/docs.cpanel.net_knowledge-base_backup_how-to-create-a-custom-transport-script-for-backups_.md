---
url: "https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/"
title: "How to Create a Custom Transport Script for Backups | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel Knowledge Base](https://docs.cpanel.net/knowledge-base/)
3. [Backup](https://docs.cpanel.net/knowledge-base/backup/)
4. How to Create a Custom Transport Script for Backups


[backups](https://docs.cpanel.net/tags/backups/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#overview)

* * *

[Create a custom transport script](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#create-a-custom-transport-script)

* * *

[Script operation](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#script-operation)

* * *

[Script commands](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#script-commands)

* * *

[Templates](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#templates)

* * *

[Code examples](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#code-examples)

* * *

[The %command subroutines](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#the-command-subroutines)

* * *

[The put functions](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#the-put-functions)

* * *

[The get function](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#the-get-function)

* * *

[The ls function](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#the-ls-function)

* * *

[The mkdir function](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#the-mkdir-function)

* * *

[The chdir function](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#the-chdir-function)

* * *

[The rmdir function](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#the-rmdir-function)

* * *

[The delete function](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#the-delete-function)

* * *

[Basic error check](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#basic-error-check)

* * *

[The $cmd command](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#the-cmd-command)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#overview)

* * *

[Create a custom transport script](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#create-a-custom-transport-script)

* * *

[Script operation](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#script-operation)

* * *

[Script commands](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#script-commands)

* * *

[Templates](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#templates)

* * *

[Code examples](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#code-examples)

* * *

[The %command subroutines](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#the-command-subroutines)

* * *

[The put functions](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#the-put-functions)

* * *

[The get function](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#the-get-function)

* * *

[The ls function](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#the-ls-function)

* * *

[The mkdir function](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#the-mkdir-function)

* * *

[The chdir function](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#the-chdir-function)

* * *

[The rmdir function](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#the-rmdir-function)

* * *

[The delete function](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#the-delete-function)

* * *

[Basic error check](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#basic-error-check)

* * *

[The $cmd command](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#the-cmd-command)

* * *

## How to Create a Custom Transport Script for Backups

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/)

Last modified: _2021 June 21_

* * *

## Overview

Warning:

**Only** advanced users should create custom transport scripts. Other users can try one of WHM’s other options:

- A local directory
- Amazon S3™
- Backblaze B2
- FTP
- Google Drive™
- Rsync
- S3 Compatible
- SFTP
- WebDAV

The _Backup Configuration_ feature allows users to create a custom destination for their backups.

## Create a custom transport script

The custom transport script is a script that you must provide for each custom backup destination that you set up in WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration/) interface ( _WHM » Home » Backups » Backup Configuration_). You can enter the transport script’s absolute path via the _Script_ setting for the _Custom_ destination type in the _Additional Destinations_ section.

### Script operation

The following rules affect how the script interacts with the system:

- The script runs once per command.
- The script **cannot** save state information between commands.
- The system does _not_ reuse the connection between commands. Instead, each time that the script runs, the system creates the connection to the remote custom destination, and then drops it after the script runs.

The system passes information to the script, through the command line, in the following order:

1. Command name.
2. Current directory.
3. Command specific parameters.
4. Host.
5. Username.

The system passes the password information to the script through the environment.

### Script commands

The script must implement the following commands:

| Command | Description | Parameters |
| --- | --- | --- |
| `chdir` | This command changes directories on the remote destination. It is equivalent to the `cd` command on the command line. | `$path` — A file path. |
| `delete` | This command deletes an individual file on the remote destination. | `$path` — A file path. |
| `get` | This command copies a remote file to a local destination. | - `$dest_root_dir` — The remote directory.<br>- `$dest_file` — The remote file name.<br>- `$local_file` — The full path to the local file. |
| `ls` | This command prints identical output to the `ls -l` command. | `$path` — A file path. |
| `mkdir` | This command creates a directory on the remote destination. | `$path` — A file path. |
| `put` | This command copies a local file to a remote destination. | - `$dest_root_dir` — The remote directory.<br>- `$dest_file` — The remote file name.<br>- `$local_file` — The full path to the local file. |
| `rmdir` | This command deletes a directory on the remote destination. We **strongly** recommend that you verify the path that you plan to delete. If you pass the root directory (`/`) as the path to delete, your system will experience **serious** problems. | `$path` — A file path. |

Backups run each of these commands individually while the system transports the backup file and validates the destination.

Your script should return any output to `STDOUT` to return data to the user.

Note:

If the script fails, it prints the output to `STDERR`. The system logs any data that the script returns to `STDERR` as part of the failure.

## Templates

You can use the `/usr/local/cpanel/scripts/custom_backup_destination.pl.skeleton` script in cPanel & WHM as a template to create your own `custom_backup_destination.pl` script. For a sample backup transport script, see the `/usr/local/cpanel/scripts/custom_backup_destination.pl.sample` script.

[Click to view...](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#click-to-view---1764175696516685893)

|     |     |
| --- | --- |
| ```<br>  1<br>  2<br>  3<br>  4<br>  5<br>  6<br>  7<br>  8<br>  9<br> 10<br> 11<br> 12<br> 13<br> 14<br> 15<br> 16<br> 17<br> 18<br> 19<br> 20<br> 21<br> 22<br> 23<br> 24<br> 25<br> 26<br> 27<br> 28<br> 29<br> 30<br> 31<br> 32<br> 33<br> 34<br> 35<br> 36<br> 37<br> 38<br> 39<br> 40<br> 41<br> 42<br> 43<br> 44<br> 45<br> 46<br> 47<br> 48<br> 49<br> 50<br> 51<br> 52<br> 53<br> 54<br> 55<br> 56<br> 57<br> 58<br> 59<br> 60<br> 61<br> 62<br> 63<br> 64<br> 65<br> 66<br> 67<br> 68<br> 69<br> 70<br> 71<br> 72<br> 73<br> 74<br> 75<br> 76<br> 77<br> 78<br> 79<br> 80<br> 81<br> 82<br> 83<br> 84<br> 85<br> 86<br> 87<br> 88<br> 89<br> 90<br> 91<br> 92<br> 93<br> 94<br> 95<br> 96<br> 97<br> 98<br> 99<br>100<br>101<br>102<br>103<br>104<br>105<br>106<br>107<br>108<br>109<br>110<br>111<br>112<br>113<br>114<br>115<br>116<br>117<br>118<br>119<br>120<br>121<br>122<br>123<br>124<br>125<br>``` | ```perl<br>#!/usr/local/cpanel/3rdparty/bin/perl<br># cpanel - scripts/custom_backup_destination.pl.skeleton      Copyright 2021 cPanel, L.L.C<br>#                                                           All rights Reserved.<br># copyright@cpanel.net                                         http://cpanel.net<br># This code is subject to the cPanel license. Unauthorized copying is prohibited<br>use strict;<br>use warnings;<br># These are the commands that a custom destination script must process<br>my %commands = (<br>    put    => \&my_put,<br>    get    => \&my_get,<br>    ls     => \&my_ls,<br>    mkdir  => \&my_mkdir,<br>    chdir  => \&my_chdir,<br>    rmdir  => \&my_rmdir,<br>    delete => \&my_delete,<br>);<br># There must be at least the command and the local directory<br>usage() if ( @ARGV < 2 );<br>#<br># The command line arguments passed to the script will be in the following order:<br># command, local_directory, command arguments, and optionally, host, user password<br># The local directory is passed in so we know from which directory to run the command<br># We need to pass this in each time since we start the script fresh for each command<br>#<br>my ( $cmd, $local_dir, @args ) = @ARGV;<br># complain if the command does not exist<br>usage() unless exists $commands{$cmd};<br># Run our command<br>$commands{$cmd}->(@args);<br>#<br># This script should only really be executed by the custom backup destination type<br># If someone executes it directly out of curiosity, give them usage info<br>#<br>sub usage {<br>    my @cmds = sort keys %commands;<br>    print STDERR "This script is for implementing a custom backup destination\n";<br>    print STDERR "It requires the following arguments:  cmd, local_dir, cmd_args\n";<br>    print STDERR "These are the valid commands:  @cmds\n";<br>    exit 1;<br>}<br>#<br># This portion contains the implementations for the various commands<br># that the script needs to support in order to implement a custom destination<br>#<br>#<br># Copy a local file to a remote destination<br>#<br>sub my_put {<br>    my ( $local, $remote, $host, $user ) = @_;<br>    my $password = $ENV{'PASSWORD'};<br>    return;<br>}<br>#<br># Copy a remote file to a local destination<br>#<br>sub my_get {<br>    my ( $remote, $local, $host, $user ) = @_;<br>    my $password = $ENV{'PASSWORD'};<br>    return;<br>}<br>#<br># Print out the results of doing an ls operation<br># The calling program will expect the data to be<br># in the format supplied by 'ls -l' and have it<br># printed to STDOUT<br>#<br>sub my_ls {<br>    my ( $path, $host, $user ) = @_;<br>    my $password = $ENV{'PASSWORD'};<br>    return;<br>}<br>#<br># Create a directory on the remote destination<br>#<br>sub my_mkdir {<br>    my ( $path, $recurse, $host, $user ) = @_;<br>    my $password = $ENV{'PASSWORD'};<br>    return;<br>}<br>#<br># Change into a directory on the remote destination<br># This does not have the same meaning as it normally would since the script<br># is run anew for each command call.<br># This needs to do the operation to ensure it doesn't fail<br># then print the new resulting directory that the calling program<br># will pass in as the local directory for subsequent calls<br>#<br>sub my_chdir {<br>    my ( $path, $host, $user ) = @_;<br>    my $password = $ENV{'PASSWORD'};<br>    return;<br>}<br>#<br># Recursively delete a directory on the remote destination<br>#<br>sub my_rmdir {<br>    my ( $path, $host, $user ) = @_;<br>    my $password = $ENV{'PASSWORD'};<br>    return;<br>}<br>#<br># Delete an individual file on the remote destination<br>#<br>sub my_delete {<br>    my ( $path, $host, $user ) = @_;<br>    my $password = $ENV{'PASSWORD'};<br>    return;<br>}<br>``` |

[View the custom\_backup\_destination.pl.sample script...](https://docs.cpanel.net/knowledge-base/backup/how-to-create-a-custom-transport-script-for-backups/#view-the-custom_backup_destination-pl-sample-script---1764175696542167377)

|     |     |
| --- | --- |
| ```<br>  1<br>  2<br>  3<br>  4<br>  5<br>  6<br>  7<br>  8<br>  9<br> 10<br> 11<br> 12<br> 13<br> 14<br> 15<br> 16<br> 17<br> 18<br> 19<br> 20<br> 21<br> 22<br> 23<br> 24<br> 25<br> 26<br> 27<br> 28<br> 29<br> 30<br> 31<br> 32<br> 33<br> 34<br> 35<br> 36<br> 37<br> 38<br> 39<br> 40<br> 41<br> 42<br> 43<br> 44<br> 45<br> 46<br> 47<br> 48<br> 49<br> 50<br> 51<br> 52<br> 53<br> 54<br> 55<br> 56<br> 57<br> 58<br> 59<br> 60<br> 61<br> 62<br> 63<br> 64<br> 65<br> 66<br> 67<br> 68<br> 69<br> 70<br> 71<br> 72<br> 73<br> 74<br> 75<br> 76<br> 77<br> 78<br> 79<br> 80<br> 81<br> 82<br> 83<br> 84<br> 85<br> 86<br> 87<br> 88<br> 89<br> 90<br> 91<br> 92<br> 93<br> 94<br> 95<br> 96<br> 97<br> 98<br> 99<br>100<br>101<br>102<br>103<br>104<br>105<br>106<br>107<br>108<br>109<br>110<br>111<br>112<br>113<br>114<br>115<br>116<br>117<br>118<br>119<br>120<br>121<br>122<br>123<br>124<br>125<br>126<br>127<br>128<br>129<br>130<br>131<br>132<br>133<br>134<br>135<br>136<br>137<br>138<br>139<br>140<br>141<br>142<br>143<br>144<br>145<br>146<br>147<br>148<br>149<br>150<br>151<br>152<br>153<br>154<br>155<br>156<br>157<br>158<br>159<br>160<br>161<br>162<br>163<br>164<br>165<br>166<br>167<br>168<br>169<br>170<br>171<br>172<br>173<br>174<br>175<br>176<br>177<br>178<br>179<br>180<br>181<br>182<br>183<br>184<br>185<br>186<br>187<br>188<br>189<br>190<br>191<br>192<br>193<br>194<br>195<br>196<br>197<br>198<br>199<br>200<br>201<br>202<br>203<br>204<br>205<br>206<br>207<br>208<br>209<br>210<br>211<br>212<br>213<br>214<br>215<br>``` | ```perl<br>#!/usr/local/cpanel/3rdparty/bin/perl<br># cpanel - scripts/custom_backup_destination.pl.sample      Copyright 2013 cPanel, L.L.C<br>#                                                           All rights Reserved.<br># copyright@cpanel.net                                         http://cpanel.net<br># This code is subject to the cPanel license. Unauthorized copying is prohibited<br>use strict;<br>use warnings;<br>use Cwd qw(getcwd abs_path);<br>use File::Spec;<br>use File::Copy;<br>use File::Path qw(make_path remove_tree);<br>use autodie qw(:all copy);<br># These are the commands that a custom destination script must process<br>my %commands = (<br>    put    => \&my_put,<br>    get    => \&my_get,<br>    ls     => \&my_ls,<br>    mkdir  => \&my_mkdir,<br>    chdir  => \&my_chdir,<br>    rmdir  => \&my_rmdir,<br>    delete => \&my_delete,<br>);<br># There must be at least the command and the local directory<br>usage() if ( @ARGV < 2 );<br>#<br># The command line arguments passed to the script will be in the following order:<br># command, local_directory, command arguments, and optionally, host and user<br># The local directory is passed in so we know from which directory to run the command<br># we need to pass this in each time since we start the script fresh for each command<br>#<br>my ( $cmd, $local_dir, @args ) = @ARGV;<br># complain if the command does not exist<br>usage() unless exists $commands{$cmd};<br># For this example transport, we are going to simply copy everything under this directory<br>my $dest_root_dir = '/custom_transport_demo';<br>mkdir $dest_root_dir unless -d $dest_root_dir;<br># Step into the local directory<br># This will be under the directory that we have as the file destination<br>$local_dir = File::Spec->catdir( $dest_root_dir, $local_dir );<br>make_path($local_dir) unless -d $local_dir;<br>chdir $local_dir;<br># Run our command<br>$commands{$cmd}->(@args);<br>#<br># This script should only really be executed by the custom backup destination type<br># If someone executes it directly out of curiosity, give them usage info<br>#<br>sub usage {<br>    my @cmds = sort keys %commands;<br>    print STDERR "This script is for implementing a custom backup destination\n";<br>    print STDERR "It requires the following arguments:  cmd, local_dir, cmd_args\n";<br>    print STDERR "These are the valid commands:  @cmds\n";<br>    exit 1;<br>}<br>#<br># Convert a path to be under our destination directory<br># Absolute paths will be directly under it,<br># relative paths will be relative to the local directory<br>#<br>sub convert_path {<br>    my ($path) = @_;<br>    if ( $path =~ m|^/| ) {<br>        $path = File::Spec->catdir( $dest_root_dir, $path );<br>    }<br>    else {<br>        $path = File::Spec->catdir( $local_dir, $path );<br>    }<br>    return $path;<br>}<br>#<br># Convert a full path to the path under the the directory<br># where we copy all the files<br>#<br>sub get_sub_directory {<br>    my ($path) = @_;<br>    # The first part will be the destination root directory,<br>    # Remove that part of the path and we will have the subdirectory<br>    $path =~ s|^$dest_root_dir||;<br>    return $path;<br>}<br>#<br># This portion contains the implementations for the various commands<br># that the script needs to support in order to implement a custom destination<br>#<br>#<br># Copy a local file to a remote destination<br>#<br>sub my_put {<br>    my ( $local, $remote, $host, $user ) = @_;<br>    my $password = $ENV{'PASSWORD'};<br>    $remote = convert_path($remote);<br>    # Make sure the full destination directory exists<br>    my ( undef, $dir, undef ) = File::Spec->splitpath($remote);<br>    make_path($dir) unless ( $dir and -d $dir );<br>    copy( $local, $remote );<br>    return;<br>}<br>#<br># Copy a remote file to a local destination<br>#<br>sub my_get {<br>    my ( $remote, $local, $host, $user ) = @_;<br>    my $password = $ENV{'PASSWORD'};<br>    $remote = convert_path($remote);<br>    copy( $remote, $local );<br>    return;<br>}<br>#<br># Print out the results of doing an ls operation<br># The calling program will expect the data to be<br># in the format supplied by 'ls -l' and have it<br># printed to STDOUT<br>#<br>sub my_ls {<br>    my ( $path, $host, $user ) = @_;<br>    my $password = $ENV{'PASSWORD'};<br>    $path = convert_path($path);<br>    # Cheesy, but this is a demo<br>    my $ls = `ls -al $path`;<br>    # Remove the annoying 'total' line<br>    $ls =~ s|^total[^\n]*\n||;<br>    print $ls;<br>    return;<br>}<br>#<br># Create a directory on the remote destination<br>#<br>sub my_mkdir {<br>    my ( $path, $recurse, $host, $user ) = @_;<br>    my $password = $ENV{'PASSWORD'};<br>    $path = convert_path($path);<br>    make_path($path);<br>    die "Failed to create $path" unless -d $path;<br>    return;<br>}<br>#<br># Change into a directory on the remote destination<br># This does not have the same meaning as it normally would since the script<br># is run anew for each command call.<br># This needs to do the operation to ensure it doesn't fail<br># then print the new resulting directory that the calling program<br># will pass in as the local directory for subsequent calls<br>#<br>sub my_chdir {<br>    my ( $path, $host, $user ) = @_;<br>    my $password = $ENV{'PASSWORD'};<br>    $path = convert_path($path);<br>    chdir $path;<br>    print get_sub_directory( getcwd() ) . "\n";<br>    return;<br>}<br>#<br># Recursively delete a directory on the remote destination<br>#<br>sub my_rmdir {<br>    my ( $path, $host, $user ) = @_;<br>    my $password = $ENV{'PASSWORD'};<br>    $path = convert_path($path);<br>    remove_tree($path);<br>    die "$path still exists" if -d $path;<br>    return;<br>}<br>#<br># Delete an individual file on the remote destination<br>#<br>sub my_delete {<br>    my ( $path, $host, $user ) = @_;<br>    my $password = $ENV{'PASSWORD'};<br>    $path = convert_path($path);<br>    unlink $path;<br>    return;<br>}<br>``` |

The system passes most variables as arguments to the command line. If your script does **not** pass one of the hardcoded arguments to the core functions, the system will display all valid arguments in the global `%commands` hash.

## Code examples

#### Use statements

Begin the script with the standard `use` statements. Include any modules that you may need for your transport:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```perl<br>use strict;<br>use warnings;<br>use Cwd qw(getcwd abs_path);<br>use File::Spec;<br>use File::Copy;<br>use File::Path qw(make_path remove_tree);<br>use autodie qw(:all copy);<br>``` |

#### The %commands list

Note:

The script can only process the following commands.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```perl<br>my %commands = (<br>    put    => \&my_put,<br>    get    => \&my_get,<br>    ls     => \&my_ls,<br>    mkdir  => \&my_mkdir,<br>    chdir  => \&my_chdir,<br>    rmdir  => \&my_rmdir,<br>    delete => \&my_delete,<br>);<br>``` |

### The %command subroutines

Every call to the script begins with a command and a local directory. You **must** pass the command line arguments in the following order:

- `$cmd` — The command.
- `$local_dir` — The local directory.
- `@args` — The command’s arguments.
- `$host` — Optional. The remote destination’s hostname or IP address.
- `$user` — Optional. The remote destination’s account username.
- `$password` — Optional. The remote destination’s password.

Use the arguments that are specific to each of the commands and variables.

Note:

- You should only include the optional `$host`, `$user`, and `$password` values if you configured them in the transport.
- If you include the `$password` value, you **must** use the `ENV` hash.
- You **must** include the `$local_dir` variable in every command subroutine that you create because the script calls each command individually.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```perl<br>my ( $cmd, $local_dir, @args, $host, $user ) = @ARGV;<br>my $password = $ENV{'PASSWORD'};<br> usage() unless exists $commands{$cmd};<br>``` |

### The put functions

The `put` function directs the script to upload or copy a local file to a remote destination. This function works similarly to the FTP `put` command.

Note:

For more robust transports, we **strongly** recommend that you perform several error checks for each step to ensure that the system reports all errors back properly.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>``` | ```perl<br>sub my_put {<br>    my ( $local, $remote, $host, $user ) = @_;   # Required argument order<br>    my $password = $ENV{'PASSWORD'};     # Enclose the password in the ENV hash<br>    $remote = convert_path($remote);     # the remote file's variable<br>    my ( undef, $dir, undef ) = File::Spec->splitpath($remote); # Make sure the full destination directory exists<br>    make_path($dir) unless ( $dir and -d $dir );<br>    copy( $local, $remote ); # copy the local file to the remote file<br>    return;<br>}<br>``` |

### The get function

The `get` function directs the script to download or retrieve a local file from a remote destination. This function works similarly to the FTP `get` command.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```perl<br>sub my_get {<br>    my ( $remote, $local, $host, $user ) = @_;<br>    my $password = $ENV{'PASSWORD'};<br>    $remote = convert_path($remote);<br>    copy( $remote, $local );<br>    return;<br>}<br>``` |

### The ls function

The `ls` function pulls the listing of a remote file or directory, similar to FTP or a local `ls` argument on the command line.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>``` | ```perl<br>sub my_ls {<br>    my ( $path, $host, $user ) = @_;<br>    my $password = $ENV{'PASSWORD'};<br>    $path = convert_path($path);<br>    my $ls = `ls -al $path`;<br>    # Remove the annoying 'total' line<br>    $ls =~ s|^total[^\n]*\n||;<br>    print $ls;<br>    return;<br>}<br>``` |

### The mkdir function

The `mkdir` function ensures that a directory exists on the remote machine and that the system uploads the backup to a real path.

Note:

Not all transports use a feature like the `mkdir` function, however, you must include this function in the script.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>``` | ```perl<br>sub my_mkdir {<br>    my ( $path, $recurse, $host, $user ) = @_;<br>    my $password = $ENV{'PASSWORD'};<br>    $path = convert_path($path);<br>    make_path($path);<br>    die "Failed to create $path" unless -d $path;<br>    return;<br>}<br>``` |

### The chdir function

The `chdir` function allows you to store the working directory and keep the session information between operations.

Note:

Because this is a custom transport script, the system will **not** keep session information between operations by a single active process.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>``` | ```perl<br>sub my_chdir {<br>    my ( $path, $host, $user ) = @_;<br>    my $password = $ENV{'PASSWORD'};<br>    $path = convert_path($path);<br>    chdir $path;<br>    print get_sub_directory( getcwd() ) . "\n";<br>    return;<br>}<br>``` |

### The rmdir function

The `rmdir` function removes a directory and recursively deletes everything below the given directory. Based on which transport you use, you may need to remove all the files and directories below the given directory before the system can execute this function.

Warning:

We **strongly** recommend that you verify the path that you plan to recursively delete. If you pass the root (`/`) directory as the path to delete, your system will experience serious issues.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>``` | ```perl<br>sub my_rmdir {<br>    my ( $path, $host, $user ) = @_;<br>    my $password = $ENV{'PASSWORD'};<br>    $path = convert_path($path);<br>    remove_tree($path);<br>    die "$path still exists" if -d $path;<br>    return;<br>}<br>``` |

### The delete function

The `delete` function deletes a single file.

Note:

We **strongly** recommend that you ensure the path that you use, relative or full, is appropriate for the transport. If your transport does **not** provide an error status check, use the `ls` function on the file to ensure the system deleted it.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>``` | ```perl<br>sub my_delete {<br>    my ( $path, $host, $user ) = @_;<br>    my $password = $ENV{'PASSWORD'};<br>    $path = convert_path($path);<br>    unlink $path;<br>    return;<br>}<br>``` |

### Basic error check

Note:

We **strongly** recommend that you:

- Perform a basic error check to ensure that the script receives the proper arguments when the system calls it. At a minimum, you **must** pass the `usage() if ( @ARGV < 2 )` command.
- Construct a built-in description of what the script is, what it does, and its purpose so that you can identify the script.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```perl<br>sub my_delete {<br>usage() if ( @ARGV < 2 );<br>``` |

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```perl<br>sub usage {<br>    my @cmds = sort keys %commands;<br>    print STDERR "This script is for implementing a custom backup destination\n";<br>    print STDERR "It requires the following arguments:  cmd, local_dir, cmd_args\n";<br>    print STDERR "These are the valid commands:  @cmds\n";<br>    exit 1;<br>}<br>``` |

### The $cmd command

Use the `%command` hash to call each command’s specific code block.

```perl
$commands{$cmd}->(@args);
```

#### Additional Documentation

* * *

- [Backup Configuration](https://docs.cpanel.net/whm/backup/backup-configuration/)
- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [How to Exclude Files from Backups](https://docs.cpanel.net/knowledge-base/backup/how-to-exclude-files-from-backups/)
- [How to Resolve CIFS-mounted Backup Drive Permissions Errors](https://docs.cpanel.net/knowledge-base/backup/how-to-resolve-cifs-mounted-backup-drive-permissions-errors/)
- [System Backups](https://docs.cpanel.net/knowledge-base/backup/system-backups/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×