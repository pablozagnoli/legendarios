using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace legendarios_API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    var Dir = Directory.GetCurrentDirectory();
                    var cert = @$"{Dir}/certificate/certificado.pfx";

                    var existeArquivo = File.Exists(cert);

                    if (!existeArquivo)
                    {
                        webBuilder.UseStartup<Startup>();
                    }
                    else
                    {
                        webBuilder.UseUrls("https://localhost:443");
                        webBuilder.UseKestrel(options =>
                        {
                            options.ListenAnyIP(443, listenOptions =>
                            {

                                listenOptions.UseHttps(cert, "1995");
                            });
                        });

                        webBuilder.UseStartup<Startup>();
                    }

                });
    }
}
