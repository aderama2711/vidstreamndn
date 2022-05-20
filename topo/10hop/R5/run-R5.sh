sudo mkdir /var/lib/nlsr

nfdc face create udp://10.0.0.13
nfdc face create udp://11.0.0.2
nfdc face create udp://10.0.0.18
sudo NDN_LOG='nlsr.*=DEBUG' nlsr -f nlsr-R5.conf